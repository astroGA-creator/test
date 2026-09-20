import { getRequiredEnv, verifyCheckMacValue } from './ecpay-utils';

function parseBody(request: Request, rawBody: string): Record<string, string> {
  const contentType = request.headers.get('content-type') ?? '';

  if (contentType.includes('application/json')) {
    const parsed = JSON.parse(rawBody) as Record<string, unknown>;
    return Object.fromEntries(
      Object.entries(parsed).map(([key, value]) => [key, value == null ? '' : String(value)]),
    );
  }

  const params = new URLSearchParams(rawBody);
  return Object.fromEntries(params.entries());
}

export async function POST(request: Request): Promise<Response> {
  try {
    const rawBody = await request.text();
    const received = parseBody(request, rawBody);
    const merchantId = getRequiredEnv('ECPAY_MERCHANT_ID');
    const hashKey = getRequiredEnv('ECPAY_HASH_KEY');
    const hashIV = getRequiredEnv('ECPAY_HASH_IV');

    if (received.MerchantID !== merchantId) {
      console.error('ECPay notify rejected: MerchantID mismatch');
      return new Response('0|MerchantID Error', { status: 400 });
    }

    const receivedMac = received.CheckMacValue ?? '';
    if (!receivedMac) {
      return new Response('0|CheckMacValue Missing', { status: 400 });
    }

    const paramsForCheck = { ...received };
    delete paramsForCheck.CheckMacValue;

    if (!(await verifyCheckMacValue(paramsForCheck, receivedMac, hashKey, hashIV))) {
      console.error('ECPay notify rejected: CheckMacValue mismatch');
      return new Response('0|CheckMacValue Error', { status: 400 });
    }

    // For Phase 1 we only log the verified notification. A database/order table
    // will be added in the next phase so payment status can be persisted.
    console.log('Verified ECPay payment notification:', {
      MerchantTradeNo: received.MerchantTradeNo,
      RtnCode: received.RtnCode,
      RtnMsg: received.RtnMsg,
      PaymentType: received.PaymentType,
      TradeNo: received.TradeNo,
      TradeAmt: received.TradeAmt,
    });

    return new Response('1|OK', {
      status: 200,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  } catch (error) {
    console.error('ECPay notification error:', error);
    return new Response('0|Server Error', { status: 500 });
  }
}

export async function GET(): Promise<Response> {
  return Response.json({
    ok: true,
    endpoint: 'ecpay-notify',
    phase: 'integration',
    message: 'This endpoint accepts POST notifications from ECPay.',
  });
}
