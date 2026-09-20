# Payment result: three states

`/payment-result` now supports three display states:

- Credit-card success: `RtnCode=1` -> 報名完成
- Credit-card failure: `RtnCode!=1` -> 付款未完成
- ATM: `paymentMethod=ATM` (or BANK/TRANSFER) -> 等待付款

Important: ATM is a non-instant payment method. The actual paid/unpaid status should still be confirmed by `/api/ecpay/notify`; this page does not by itself prove that an ATM transfer has been received.
