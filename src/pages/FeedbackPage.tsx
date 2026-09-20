import React, { useEffect, useState } from 'react';
import { ArrowLeft, CheckCircle2, Home } from 'lucide-react';
import type { PageRoute } from '../types';

interface FeedbackPageProps {
  onNavigate: (path: PageRoute) => void;
}

export function FeedbackPage({ onNavigate }: FeedbackPageProps) {
  const [submitted, setSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(5);

  // 判斷是否是 Tally 填寫完成後重新導回來的
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.get('submitted') === '1') {
      setSubmitted(true);
    }
  }, []);

  // 填寫完成後開始 5 秒倒數
  useEffect(() => {
    if (!submitted) return;

    setCountdown(5);

    const timer = window.setInterval(() => {
      setCountdown((current) => {
        if (current <= 1) {
          window.clearInterval(timer);
          onNavigate('/');
          return 0;
        }

        return current - 1;
      });
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, [submitted, onNavigate]);

  return (
    <main className="relative z-10 min-h-screen px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-4xl flex-col">

        {/* 頂部品牌區 */}
        <div className="mb-8 flex items-center justify-between">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="group flex items-center gap-3"
            aria-label="回到 Galaxy Answers 首頁"
          >
            <img
              src="/images/logo_icon.png"
              alt="Galaxy Answers"
              className="h-10 w-10 object-contain"
            />

            <div className="text-left">
              <div className="font-serif text-sm tracking-[0.18em] text-[#f4d03f]">
                GALAXY ANSWERS
              </div>

              <div className="text-xs tracking-[0.12em] text-slate-400">
                星聲工作室
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-[#d28b4c]/50 hover:bg-[#d28b4c]/10 hover:text-white sm:inline-flex"
          >
            <ArrowLeft size={16} />
            回到官網
          </button>
        </div>

        <section className="flex-1">

          {/* 標題 */}
          <div className="mb-8 text-center">
            <p className="mb-3 text-xs font-medium tracking-[0.3em] text-[#d28b4c]">
              COURSE FEEDBACK
            </p>

            <h1 className="fluid-title-h1 font-serif text-white">
              謝謝你，留下今天的星聲
            </h1>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              課程結束後的一點回饋，<br/>
              會幫助我們把下一次的內容做得更好。
            </p>
          </div>

          {/* Tally 問卷 */}
          {!submitted && (
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07141a]/60 shadow-2xl backdrop-blur-md">
              <iframe
                src="https://tally.so/embed/Ek2XVl?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                title="Galaxy Answers 課後回饋問卷"
                loading="eager"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="block min-h-[1500px] w-full sm:min-h-[1450px]"
              />
            </div>
          )}

          {/* 完成問卷後 */}
          <div
            className={`mx-auto mt-8 max-w-xl transition-all duration-700 ${
              submitted
                ? 'opacity-100'
                : 'pointer-events-none max-h-0 overflow-hidden opacity-0'
            }`}
            aria-live="polite"
          >
            <div className="rounded-[1.75rem] border border-[#d28b4c]/30 bg-[#0b1d26]/90 p-7 text-center shadow-xl backdrop-blur-md sm:p-9">

              {/* 完成 Icon */}
              <CheckCircle2
                className="mx-auto mb-4 text-[#f4d03f]"
                size={42}
                strokeWidth={1.5}
              />

              <h2 className="font-serif text-xl text-white sm:text-2xl">
                回饋已收到
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                謝謝你願意花一點時間，
                <br />
                讓我們知道今天的課程帶給你的感受。
              </p>

              {/* 回首頁按鈕 */}
              <button
                type="button"
                onClick={() => onNavigate('/')}
                className="btn-amber mt-6 inline-flex items-center rounded-full px-6 py-3 text-sm font-medium"
              >
                <Home size={16} className="mr-2" />
                回到官網首頁
              </button>

              {/* 倒數 */}
              <p className="mt-4 text-xs text-slate-500">
                {countdown} 秒後自動回到官網首頁
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-10 text-center text-xs tracking-wide text-slate-500">
          Galaxy Answers 星聲工作室
        </footer>

      </div>
    </main>
  );
}
