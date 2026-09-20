import React from 'react';

const PaymentResultPage: React.FC = () => {
  return (
    <main className="relative z-10 min-h-screen text-white flex items-center justify-center px-5 py-12">
      <div className="w-full max-w-2xl">
        <section className="bg-[#0b1d26]/95 border border-[#d28b4c]/40 rounded-[2rem] px-6 py-10 sm:px-10 sm:py-12 shadow-2xl">

          <div className="text-center">

            <div className="text-[#d28b4c] text-3xl mb-5">
              ✦
            </div>

            <h1 className="text-3xl sm:text-4xl font-serif tracking-wide mb-4">
              付款資訊確認
            </h1>

            <p className="text-lg sm:text-xl text-white/80 leading-8">
              感謝你完成報名流程。
            </p>

          </div>

          <div className="border-t border-white/10 mt-10 pt-8">

            <div className="text-center">

              <p className="text-white/80 leading-8 text-sm sm:text-base">
                您的付款資訊確認中，
                <br />
                請點選加入我們的{' '}
                <a
                  href="https://lin.ee/QYm7Yco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline underline-offset-4 text-white hover:text-[#d28b4c] transition"
                >
                  官方 LINE 帳號
                </a>
                ，
                <br />
                我們會確認你的報名資料與付款狀態，
                <br />
                如有任何問題，我們將在三個工作天內透過官方 LINE 與你聯繫。
                <br />
                <br />
                期待在星光下與你相聚！
              </p>

            </div>

          </div>

          <div className="text-center mt-10">

            <a
              href="/"
              className="inline-block border border-[#d28b4c]/60 rounded-full px-8 py-3 text-sm sm:text-base text-white hover:bg-[#d28b4c]/10 transition"
            >
              回到星聲工作室
            </a>

          </div>

        </section>
      </div>
    </main>
  );
};

export { PaymentResultPage };
