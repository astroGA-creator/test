import React, { useMemo } from 'react';
import { Sparkles, ArrowRight, Compass, HeartHandshake, Eye, BookOpen, ChevronDown } from 'lucide-react';
import type { PageRoute } from '../types';

interface BrandInfoPageProps {
  onNavigate: (path: PageRoute) => void;
}

export const BrandInfoPage: React.FC<BrandInfoPageProps> = ({ onNavigate }) => {
    const stars = useMemo(() => {
    return Array.from({ length: 120 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 0.5}px`,
      duration: `${Math.random() * 3 + 2}s`,
    }));
  }, []);
  const scrollToContent = () => {
    const el = document.getElementById('brand-philosophy');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* 頂部預留高度 (對應固定 Header) */}
      <div className="h-16" />

      {/* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
          ① 品牌 Hero Section (滿版視窗高度，沉靜安靜的品牌形象)
      ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝ */}
      <section 
        id="brand-hero" 
        className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center overflow-hidden px-6 text-center"
      >
        {/* 本地星空背景與深色宇宙漸層 (不從 Unsplash 外部加載) */}
        <div
  className="absolute inset-0 z-0 opacity-65 bg-cover bg-center cosmic-hero-bg pointer-events-none"
  style={{
    backgroundImage: "linear-gradient(rgba(11, 29, 38, 0.35), rgba(11, 29, 38, 0.35)), url('/images/background_photo.png')"
  }}
/>

      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {stars.map((star) => (
          <span
            key={star.id}
            className="star"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              ['--duration' as string]: star.duration,
            }}
          />
        ))}
      </div>

        {/* 柔和金色光暈背景效果 
        <div className="absolute w-[500px] h-[500px] bg-[#d28b4c]/10 rounded-full blur-[120px] pointer-events-none -top-20 -left-20" />
        <div className="absolute w-[450px] h-[450px] bg-[#f4d03f]/10 rounded-full blur-[130px] pointer-events-none -bottom-20 -right-20" /> */}
        
        {/* Hero 主內容 */}
        <div className="container mx-auto relative z-10 max-w-4xl py-12 flex flex-col items-center justify-center space-y-8 md:space-y-10">
          {/* 1. 品牌名稱 */}
          <div className="flex items-center justify-center mb-2">
            <img
              src="/images/logo.png"
              alt="Galaxy Answers 星聲工作室"
              className="w-56 sm:w-64 md:w-72 h-auto object-contain"
            />
          </div>

          {/* 2. 品牌 Slogan (主要視覺焦點) */}
          <div className="space-y-4 px-2 min-w-0 max-w-full">
            <h1 className="fluid-title-hero font-bold text-white serif-font tracking-normal sm:tracking-wide drop-shadow-md min-w-0 max-w-full">
              由心而生，
              <span className="text-[#d28b4c]">探索星聲</span>
            </h1>
          </div>

          {/* 3. 品牌副標題 (層級低於 Slogan) */}
          <div className="w-full max-w-2xl mx-auto px-2 min-w-0">
            <p className="text-fit-wrap text-sm sm:text-lg md:text-xl lg:text-2xl text-slate-300 font-light serif-font leading-relaxed tracking-normal sm:tracking-wide">
              用星座工具理解自己，找回信任自己的底氣
            </p>
          </div>

          {/* 4. 品牌快速指引按鈕 */}
            <div className="pt-4 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl">
            
              {/* 認識品牌 ↓ 品牌理念 */}
              <button
                onClick={() => {
                  document.getElementById('brand-philosophy')?.scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
                className="border border-[#f4d03f]/70 text-[#f4d03f] bg-[#f4d03f]/5 px-4 py-2.5 rounded-full text-base font-semibold cursor-pointer transition hover:-translate-y-1 hover:bg-[#f4d03f]/15 hover:border-[#f4d03f]"
              >
                認識品牌
              </button>
            
              {/* 認識占星 ↓ 什麼是占星？ */}
              <button
                onClick={() => {
                  document.getElementById('why-astrology')?.scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
                className="border border-[#f4d03f]/70 text-[#f4d03f] bg-[#f4d03f]/5 px-4 py-2.5 rounded-full text-base font-semibold cursor-pointer transition hover:-translate-y-1 hover:bg-[#f4d03f]/15 hover:border-[#f4d03f]"
              >
                認識占星
              </button>
            
              {/* 認識我們 ↓ 講師陣容 */}
              <button
                onClick={() => {
                  document.getElementById('mentors')?.scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
                className="border border-[#f4d03f]/70 text-[#f4d03f] bg-[#f4d03f]/5 px-4 py-2.5 rounded-full text-base font-semibold cursor-pointer transition hover:-translate-y-1 hover:bg-[#f4d03f]/15 hover:border-[#f4d03f]"
              >
                認識我們
              </button>
            
              {/* 最新活動 → 活動資訊頁 */}
              <button
                onClick={() => onNavigate('/course')}
                className="btn-amber px-4 py-2.5 rounded-full text-base font-semibold shadow-xl cursor-pointer transition hover:-translate-y-1"
              >
                最新活動 →
              </button>
            
            </div>
        </div>
      </section>

      {/* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
          ② 品牌理念 Section (使用 PDF 核心文案)
      ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝ */}
      <section id="brand-philosophy" className="scroll-mt-20 container mx-auto px-6 py-20 max-w-5xl min-w-0">
  <div className="glass-panel w-full min-w-0 p-8 sm:p-12 md:p-16 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden">
    <div className="absolute top-0 right-0 w-80 h-80 bg-[#d28b4c]/10 rounded-full blur-3xl pointer-events-none" />

    <div className="relative z-10 space-y-8 min-w-0">

      <div className="flex items-center gap-3 min-w-0">
          <span className="w-10 h-0.5 bg-gradient-to-r from-[#d28b4c] to-[#f4d03f] shrink-0" />
          <span className="min-w-0 whitespace-nowrap text-[clamp(0.65rem,3.5vw,1rem)] uppercase tracking-widest text-[#f4d03f] font-semibold">
            品牌理念 Brand Philosophy
          </span>
        </div>

      <h2 className="fluid-title-h2 font-bold text-white serif-font leading-snug min-w-0 max-w-full">
        GalaxyAnswers 星聲工作室
      </h2>

      <div className="space-y-6 text-slate-200 text-base sm:text-lg md:text-xl font-light serif-font leading-relaxed text-justify min-w-0">

        <p className="text-fit-wrap border-l-2 border-[#d28b4c] pl-5 text-white/95">
          我們相信占星，不是為了替人生下定論，
          而是能幫助每個人理解自己，重新做出新的選擇。
        </p>

        <p className="text-fit-wrap text-slate-400 text-sm sm:text-base font-sans leading-[1.8]">
          占星是一面溫和清晰的鏡子，陪伴你整理思緒、看懂情緒。
          <br />
          我們致力於跳脫星座娛樂化的標籤，透過比對與討論，帶領你掌握行為與決策背後的生命驅動力。
        </p>

              </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl">
                <Compass className="w-5 h-5 text-[#f4d03f] shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200 font-medium">跳脫娛樂標籤・回歸深度理解</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl">
                <Eye className="w-5 h-5 text-[#d28b4c] shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200 font-medium">洞悉行為因果・掌握內在驅力</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl">
                <HeartHandshake className="w-5 h-5 text-[#f4d03f] shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200 font-medium">找回自我信任・自由做出選擇</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
              ③ 為什麼我們選擇用占星？
          ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝ */}
          <section id="why-astrology" className="scroll-mt-20 container mx-auto px-6 py-20 max-w-5xl">
          
           <div className="text-center mb-12">
              <h2 className="fluid-title-h2 font-bold text-white serif-font mb-4">
                什麼是占星？
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          
              {/* 左側：活動照片 */}
              <div className="relative">
                <div className="overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl max-w-lg mx-auto">
                  <img
                    src="/images/brandinfo_image_1.png"
                    alt="星聲工作室占星課程"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
          
              {/* 右側：品牌文章 */}
              <div className="space-y-7">
          
                {/* 大標 */}
                <div className="relative min-w-0">

                    <h2 className="text-[clamp(1rem,4.8vw,1.875rem)] font-bold text-[#d28b4c] serif-font leading-relaxed min-w-0 max-w-full">
                      不是每個人都需要學占星。
                      <br />
                      但每個人，都需要一套理解自己的方法。
                    </h2>
                  
                  </div>
          
                {/* 文章 */}
                <div className="space-y-5">
          
                  {/* 第一段 */}
                  <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                    占星提供一個客觀、無批判、有系統架構的方法，在生命的每一次轉折中，幫助你釐清自己與生俱來的性格特質與心理需求。
                  </p>
          
                  {/* 第二段 */}
                  <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                    我們透過具體的提問和拆解，帶大家看見自我的多重面向，利用星盤地圖認識完整的自己。讓生命不再矛盾、消耗或盲從，一層一層解開宇宙送給你的人生指南。
                  </p>
          
                </div>
                  
              </div>
          
            </div>
          
          </section>

      {/* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
          ④ 講師介紹 Section (顏惠貞 Gudhata & 阿拉丁 Aladdin)
      ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝ */}
      <section id="mentors" className="container mx-auto px-6 py-16 max-w-5xl">
        <div className="text-center mb-14">
          
          <h2 className="fluid-title-h2 font-bold text-white serif-font mb-3">
            講師陣容
          </h2>
          <div className="w-16 h-1 bg-[#d28b4c] mx-auto mb-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          {/* Mentor 1: 顏惠貞 Gudhata */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center group hover:border-[#d28b4c]/50 transition duration-300 shadow-xl">
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden mentor-avatar mb-6 flex items-center justify-center bg-[#07141a]">
              <img
                src="/images/Gudhata.png"
                alt="顏惠貞 Gudhata"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <h3 className="text-white font-bold text-xl md:text-2xl mb-1 serif-font">
              顏惠貞 Gudhata
            </h3>
            <p className="text-[#f4d03f] text-xs font-bold tracking-widest uppercase mb-1">
              銀河的奧秘
            </p>
            <p className="text-slate-400 text-sm mb-4">占星性靈導師</p>
            <p className="text-fit-wrap text-slate-300 text-[clamp(0.65rem,3vw,0.875rem)] leading-relaxed text-center font-light">
                運用古老占星智慧，以同理與溫暖的引導<br />
                陪你面對內在的焦慮與衝突，看見生命深處的禮物
              </p>
          </div>

          {/* Mentor 2: 阿拉丁 Aladdin */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center group hover:border-[#d28b4c]/50 transition duration-300 shadow-xl">
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden mentor-avatar mb-6 flex items-center justify-center bg-[#07141a]">
              <img
                src="/images/Aladdin.png"
                alt="阿拉丁 Aladdin"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <h3 className="text-white font-bold text-xl md:text-2xl mb-1 serif-font">
              阿拉丁 Aladdin
            </h3>
            <p className="text-[#f4d03f] text-xs font-bold tracking-widest uppercase mb-1">
              星辰的榮光
            </p>
            <p className="text-slate-400 text-sm mb-4">星象引導顧問</p>
            <p className="text-fit-wrap text-slate-300 text-[clamp(0.65rem,3vw,0.875rem)] leading-relaxed text-center font-light">
              專注星盤應用，以清晰與務實的方法<br />
              陪你看見盲點，將星象化為自我成長的行動指引
            </p>
          </div>
        </div>
      </section>

      {/* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
          ⑤ 前往探索目前活動 (前往活動資訊 / 前往活動報名)
      ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝ */}
      <section id="featured-course" className="container mx-auto px-6 py-16 max-w-5xl">
        <div className="bg-gradient-to-br from-[#162f3a]/90 via-[#0b1d26]/95 to-[#07141a] border-2 border-[#d28b4c]/50 p-8 sm:p-12 md:p-14 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#d28b4c]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center md:text-left min-w-0">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d28b4c]/20 border border-[#d28b4c]/40 text-[#f4d03f] text-sm font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#d28b4c]" />
                <span>最新實體課程</span>
              </div>
              <h3 className="fluid-title-h3 font-bold text-white serif-font leading-tight">
                  <span className="title-phrase">【人生星方向系列二】</span>
                  <span className="title-phrase">太陽・水星・木星</span>
                </h3>
                
                <p className="text-[#f4d03f] text-lg sm:text-xl font-medium serif-font">
                  <span className="title-phrase">突破表達無力感，</span>
                  <span className="title-phrase">發揮社群影響力</span>
                </p>
              <p className="text-slate-300 text-xs sm:text-sm font-light max-w-xl leading-relaxed">
                10/17（六）・實體課程<br />
                讓占星，成為你重新閱讀自己的開始。
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0 items-center sm:justify-center lg:justify-start">
              <button
                id="brand-go-course"
                onClick={() => onNavigate('/course/series-2')}
                className="btn-amber px-8 py-3.5 rounded-full text-sm md:text-base font-bold shadow-xl cursor-pointer flex items-center justify-center gap-2"
              >
                <span>查看活動資訊</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                id="brand-go-register"
                onClick={() => onNavigate('/register')}
                className="btn-outline-amber px-8 py-3 rounded-full text-xs md:text-sm font-medium cursor-pointer text-center"
              >
                直接填寫報名表單
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
