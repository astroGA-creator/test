# Payment Result Page Update

This update adds `/payment-result` and connects ECPay `OrderResultURL` to it.

## Changes
- Added `src/pages/PaymentResultPage.tsx`
- Added `/payment-result` to `PageRoute`
- Added `/payment-result` route and page title in `src/App.tsx`
- Payment result page uses the Galaxy Answers dark/starry visual style and has no site header/footer
- Added `OrderResultURL: \`${appUrl}/payment-result\`` to `api/ecpay/create-order.ts`
- Result page accepts optional `amount` and `MerchantTradeNo` / `orderNo` query parameters; otherwise it shows the requested example values NT$2,800 and GAMTXBAFHZ74GK4.
- Official LINE link: https://lin.ee/QYm7Yco

## Important
The page is a visual/result page for now. It does not yet independently verify payment status. The authoritative payment confirmation should continue to come from ECPay's server-to-server `ReturnURL` notification (`/api/ecpay/notify`).
