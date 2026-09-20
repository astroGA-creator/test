import React from 'react';
import { MessageCircleHeart } from 'lucide-react';
import type { PageRoute } from '../types';

interface Props {
  onNavigate: (path: PageRoute) => void;
}

const consultationItems = [
  ['占星骰子', '預測占卜'],
  ['主題諮詢盤', '工作・愛情・關係・事件'],
  ['流年盤', '年度運勢'],
  ['本命盤', '自我認識'],
  ['靈魂盤', '靈魂訊息'],
];

export const ConsultationPage: React.FC<Props> = () => {
  return (
    <main className="pt-28 pb-24 px-6">
      <section className="container mx-auto max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-[#f4d03f] text-xs tracking-[0.3em] uppercase mb-4">ASTROLOGY CONSULTATION</p>
          <h1 className="fluid-title-h2 font-bold text-white serif-font mb-5">星盤諮詢</h1>
          <p className="text-slate-300 leading-relaxed">這一頁先建立商品總覽骨架，之後可以逐步補上各項諮詢的詳細介紹、比較與預約流程。</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {consultationItems.map(([name, description]) => (
            <article key={name} className="glass-panel border border-white/10 rounded-3xl p-7 min-h-48 flex flex-col justify-between">
              <div>
                <MessageCircleHeart className="w-6 h-6 text-[#f4d03f] mb-5" />
                <h2 className="text-xl font-bold text-white serif-font mb-2">{name}</h2>
                <p className="text-slate-400 text-sm">{description}</p>
              </div>
              <p className="text-xs text-[#d28b4c] mt-7">詳細內容待 Phase 4 補上</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};
