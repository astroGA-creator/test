# Galaxy Answers — ECPay Phase 1 integration

This project now contains a minimal ECPay AIO V5 integration scaffold.

## Payment methods

The checkout is intentionally limited to:

- Credit card, one-time payment (`Credit`)
- ATM virtual account (`ATM`)

Other ECPay payment methods are hidden with `IgnorePayment`.

## Required Vercel Environment Variables

- `ECPAY_MERCHANT_ID`
- `ECPAY_HASH_KEY`
- `ECPAY_HASH_IV`
- `APP_URL`

Do not commit real HashKey / HashIV values to GitHub.

## Endpoints

- `POST /api/ecpay/create-order` creates a signed ECPay AIO V5 order and returns an HTML page that auto-submits to ECPay.
- `POST /api/ecpay/notify` receives and verifies ECPay's server-side payment notification, then replies `1|OK`.

## Important limitation in this phase

Payment notifications are verified and logged, but payment status is not persisted yet. The next phase will add an order table/database so a paid registration can be tied to a Tally submission and queried later.

## Tally integration

Tally embeds expose a `Tally.FormSubmitted` postMessage event containing the submission ID and full answer set. The website can use that event to send the relevant amount/item information to `/api/ecpay/create-order` and continue to ECPay without requiring Tally Pro.
