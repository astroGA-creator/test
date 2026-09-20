import { generateCheckMacValue, getRequiredEnv } from './ecpay-utils.js';

type ECPayResult = Record<string, string>;

function toRecord(form: FormData): ECPayResult {
  const result: ECPayResult = {};

  for (const [key, value] of form.entries()) {
    if (typeof value === 'string') {
      result[key] = value;
    }
  }

  return result;
}

export async function POST(request: Request): Promise<Response> {
  try {
    const form = await request.formData();
    const received = toRecord(form);

    const checkMacValue = received.CheckMacValue || '';

    const params = { ...received };
    delete params.CheckMacValue;

    const expected = await generateCheckMacValue(
      params,
      getRequiredEnv('ECPAY_HASH_KEY'),
      getRequiredEnv('ECPAY_HASH_IV'),
    );

    // 驗證綠界回傳資料
    if (!checkMacValue || expected !== checkMacValue) {
      return new Response('0|CheckMacValue Error', {
        status: 400,
      });
    }

    const appUrl = (
      process.env.APP_URL ||
      'https://galaxyanswers.vercel.app'
    ).replace(/\/$/, '');

    const url = new URL(`${appUrl}/payment-result`);

    /*
     * ==========================================
     * 判斷付款狀態
     * ==========================================
     *
     * RtnCode = 1 → 付款成功
     * 其他 → 付款失敗
     */

    const rtnCode = received.RtnCode || '0';

    let status = 'failed';

    if (rtnCode === '1') {
      status = 'success';
    }

    /*
     * 如果綠界回傳 ATM，
     * 則顯示 ATM 等待付款狀態。
     *
     * 注意：
     * ATM 本身屬於非即時付款，
     * 真正是否收到款項仍以 ReturnURL
     * /api/ecpay/notify 為準。
     */

    const choosePayment = received.ChoosePayment || '';

    if (
      choosePayment === 'ATM' ||
      received.PaymentType === 'ATM'
    ) {
      status = 'atm';
    }

    /*
     * ==========================================
     * 傳資料給 PaymentResultPage
     * ==========================================
     */

    url.searchParams.set('status', status);

    if (received.TradeAmt) {
      url.searchParams.set('amount', received.TradeAmt);
    }

    if (received.MerchantTradeNo) {
      url.searchParams.set(
        'orderNo',
        received.MerchantTradeNo,
      );
    }

    if (received.RtnCode) {
      url.searchParams.set(
        'RtnCode',
        received.RtnCode,
      );
    }

    if (received.RtnMsg) {
      url.searchParams.set(
        'RtnMsg',
        received.RtnMsg,
      );
    }

    if (received.PaymentType) {
      url.searchParams.set(
        'paymentMethod',
        received.PaymentType,
      );
    }

    if (received.ChoosePayment) {
      url.searchParams.set(
        'choosePayment',
        received.ChoosePayment,
      );
    }

    return Response.redirect(
      url.toString(),
      303,
    );

  } catch (error) {
    console.error(
      'ECPay result error:',
      error,
    );

    return new Response(
      '0|Result processing error',
      {
        status: 500,
      },
    );
  }
}

export async function GET(): Promise<Response> {
  return Response.json({
    ok: true,
    endpoint: 'ecpay-result',
  });
}
