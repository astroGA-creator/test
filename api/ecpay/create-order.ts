import {
  escapeHtml,
  generateCheckMacValue,
  getAppUrl,
  getRequiredEnv,
} from './ecpay-utils.js';

const ECPAY_URL = 'https://payment.ecpay.com.tw/Cashier/AioCheckOut/V5';

interface CreateOrderBody {
  amount?: unknown;
  itemName?: unknown;
  tradeDesc?: unknown;
  customerName?: unknown;
  customerEmail?: unknown;
  customerPhone?: unknown;
}

function asString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function buildOrderNumber(): string {
  // <= 20 chars, ASCII letters/digits only, and unique enough for normal use.
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).slice(2, 7).toUpperCase();
  return `GA${timestamp}${random}`.slice(0, 20);
}

function buildAutoSubmitHtml(action: string, fields: Record<string, string>): string {
  const inputs = Object.entries(fields)
    .map(([name, value]) =>
      `<input type="hidden" name="${escapeHtml(name)}" value="${escapeHtml(value)}">`,
    )
    .join('');

  return `<!doctype html>
<html lang="zh-Hant">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>前往綠界付款</title>
</head>
<body>
  <p>正在前往綠界付款頁面，請稍候…</p>
  <form id="ecpay-form" method="post" action="${escapeHtml(action)}">${inputs}</form>
  <script>document.getElementById('ecpay-form').submit();</script>
</body>
</html>`;
}

export async function POST(request: Request): Promise<Response> {
  let body: CreateOrderBody;

  try {
    body = (await request.json()) as CreateOrderBody;
  } catch {
    return Response.json({ ok: false, error: 'Request body must be valid JSON.' }, { status: 400 });
  }

  const amount = Number(body.amount);
  const itemName = asString(body.itemName);
  const tradeDesc = asString(body.tradeDesc) || 'Galaxy Answers 星聲工作室活動報名';

  if (!Number.isInteger(amount) || amount <= 0 || amount > 200000) {
    return Response.json({ ok: false, error: 'amount must be an integer between 1 and 200000.' }, { status: 400 });
  }

  if (!itemName || itemName.length > 400) {
    return Response.json({ ok: false, error: 'itemName is required and must be <= 400 characters.' }, { status: 400 });
  }

  try {
    const merchantId = getRequiredEnv('ECPAY_MERCHANT_ID');
    const hashKey = getRequiredEnv('ECPAY_HASH_KEY');
    const hashIV = getRequiredEnv('ECPAY_HASH_IV');
    const appUrl = getAppUrl();
    const merchantTradeNo = buildOrderNumber();
    const merchantTradeDate = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Asia/Taipei',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hourCycle: 'h23',
    })
      .format(new Date())
      .replace(/-/g, '/')
      .replace(/,\s*/, ' ');

    const params: Record<string, string> = {
      MerchantID: merchantId,
      MerchantTradeNo: merchantTradeNo,
      MerchantTradeDate: merchantTradeDate,
      PaymentType: 'aio',
      TotalAmount: String(amount),
      TradeDesc: tradeDesc.slice(0, 200),
      ItemName: itemName,
      ReturnURL: `${appUrl}/api/ecpay/notify`,
      ChoosePayment: 'ALL',
      // Keep only the two methods we currently want:
      // Credit = credit card, ATM = ATM virtual account.
      IgnorePayment: 'WebATM#CVS#BARCODE#ApplePay#TWQR#BNPL#WeiXin#DigitalPayment',
      EncryptType: '1',
      ClientBackURL: `${appUrl}/payment-result`,
      NeedExtraPaidInfo: 'N',
      CustomField1: 'GalaxyAnswers',
    };

    const checkMacValue = await generateCheckMacValue(params, hashKey, hashIV);
    const fields = { ...params, CheckMacValue: checkMacValue };

    // Customer contact data is not required to create the AIO order. We keep
    // the endpoint intentionally minimal until Tally field mapping is finalized.
    void body.customerName;
    void body.customerEmail;
    void body.customerPhone;

    return new Response(buildAutoSubmitHtml(ECPAY_URL, fields), {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-store',
      },
    });
  } catch (error) {
    console.error('ECPay create-order error:', error);
    return Response.json(
      { ok: false, error: 'ECPay server configuration is incomplete.' },
      { status: 500 },
    );
  }
}

export async function GET(): Promise<Response> {
  return Response.json({
    ok: true,
    endpoint: 'ecpay-create-order',
    phase: 'integration',
    paymentMethods: ['credit-card-once', 'atm'],
  });
}
