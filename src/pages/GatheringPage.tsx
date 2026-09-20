import React from 'react';
import { ArrowRight, Clock3, UsersRound } from 'lucide-react';
import type { PageRoute } from '../types';

interface Props {
  onNavigate: (path: PageRoute) => void;
}

export const GatheringPage: React.FC<Props> = () => {
  return (
    <main className="pt-28 pb-24 px-6">
      <section className="container mx-auto max-w-5xl">
        <div className="glass-panel rounded-[2.5rem] border border-white/10 p-8 sm:p-12 md:p-16 text-center overflow-hidden relative">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#d28b4c]/10 blur-3xl" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="text-[#f4d03f] text-xs tracking-[0.3em] uppercase mb-4">STARLIGHT GATHERING</p>
            <h1 className="fluid-title-h2 font-bold text-white serif-font mb-5">星光小聚</h1>
            <p className="text-[#d28b4c] text-xl sm:text-2xl serif-font mb-5">有的吃、有的玩、有的交朋友，還可以一起聊聊星座。</p>
            <p className="text-slate-300 leading-relaxed mb-8">
              每月一次、兩個小時的輕鬆聚會。這個頁面目前先建立品牌與導覽框架，之後會加入本月主題、合作講師、歷屆活動照片與報名入口。
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 rounded-full"><Clock3 className="w-4 h-4 text-[#f4d03f]" />每月一次・兩小時</span>
              <span className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 rounded-full"><UsersRound className="w-4 h-4 text-[#f4d03f]" />星座 × 每月不同體驗</span>
            </div>
            <div className="mt-9 inline-flex items-center gap-2 text-[#f4d03f] text-sm font-semibold opacity-70">
              完整頁面將於 Phase 2 建置 <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
