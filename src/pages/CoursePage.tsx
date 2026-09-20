import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  Clock, 
  MapPin, 
  ExternalLink,
  ChevronDown,
  ChevronUp,
  CircleHelp
} from 'lucide-react';
import type { PageRoute } from '../types';
import type { CourseData } from '../data/courseData';

interface CoursePageProps {
  data: CourseData;
  onNavigate: (path: PageRoute) => void;
}

export const CoursePage: React.FC<CoursePageProps> = ({ data, onNavigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen">
      {/* 頂部預留高度 (對應固定 Header) */}
      <div className="h-16" />

      {/* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
          【01 HERO】
      ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝ */}
      <section id="course-hero" className="pt-6 sm:pt-10 pb-8 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl space-y-6">
          {/* Banner 圖片卡片 */}
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/15 bg-[#07141a] shadow-2xl transition-all duration-300">
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#d28b4c]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#f4d03f]/10 rounded-full blur-3xl pointer-events-none" />

            <img
              src={data.banner.src}
              alt={data.banner.alt}
              referrerPolicy="no-referrer"
              className="w-full h-auto object-contain block mx-auto relative z-10"
            />
          </div>

          {/* Banner 下方核心導讀與標題 */}
          <div className="text-center pt-8 sm:pt-10">
            <h2 className="fluid-title-h1 font-bold text-white serif-font tracking-normal sm:tracking-wide min-w-0 max-w-full">
              <span className="block">
                {data.hero.headlineLine1}
              </span>
              <span className="block text-[#d28b4c]">
                {data.hero.headlineLine2}
              </span>
            </h2>

            {/* 補充說明 */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-300 pt-6">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#d28b4c]" />
                {data.hero.date}
              </span>

              <span className="text-slate-500">•</span>

              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#f4d03f]" />
                {data.hero.location}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 頁面主要內容容器 */}
      <main className="container mx-auto px-4 sm:px-6 max-w-4xl space-y-16 md:space-y-24 pb-20 relative z-10">

        {/* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
            【02 共鳴區】
        ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝ */}
        <section id="course-resonance" className="scroll-mt-20 space-y-8 sm:space-y-9">
          <div className="max-w-3xl mx-auto">
            {/* 手機版：三個項目合併成一個大框 */}
            <div className="sm:hidden glass-panel rounded-2xl border border-white/10 px-5 py-2">
              {data.resonance.cards.map((card, i) => (
                <React.Fragment key={i}>
                  <div className="flex items-center gap-4 py-5">
                    <CircleHelp className="w-6 h-6 text-[#d28b4c] shrink-0" />
                    <p className="text-[clamp(0.7rem,3.2vw,0.875rem)] text-slate-200 font-serif leading-relaxed">
                      {card}
                    </p>
                  </div>
                  {i < data.resonance.cards.length - 1 && (
                    <div className="border-t border-white/10" />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* 桌機版：三張卡片並排 */}
            <div className="hidden sm:grid sm:grid-cols-3 gap-4 items-stretch">
              {data.resonance.cards.map((card, i) => (
                <div 
                  key={i} 
                  className="glass-panel p-5 sm:p-6 rounded-2xl border border-white/10 text-center flex flex-col items-center justify-center min-h-[140px] sm:min-h-[150px] transition hover:border-white/20"
                >
                  <CircleHelp className="w-6 h-6 text-[#d28b4c] mb-3 shrink-0" />
                  <p className="text-sm sm:text-base text-slate-200 font-serif leading-relaxed">
                    {card}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 下方內容方框 */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#d28b4c]/30 text-center space-y-4 sm:space-y-5 max-w-3xl mx-auto transition hover:border-[#d28b4c]/45">
            <h2 className="fluid-title-h2 font-bold font-serif tracking-normal sm:tracking-wide leading-snug">
              <span className="title-phrase text-white">{data.resonance.boxTitleLine1}</span><br />
              <span className="title-phrase text-white">{data.resonance.boxTitleLine2}</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              <span className="title-phrase">{data.resonance.boxDescLine1}</span>
              <span className="title-phrase">{data.resonance.boxDescLine2}</span>
            </p>

            <p className="text-base sm:text-lg font-serif font-bold text-[#f4d03f] pt-1">
              {data.resonance.boxHighlight}
            </p>
          </div>
        </section>

        {/* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
            【03 這堂課程要幫你整理什麼？】
        ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝ */}
        <section id="course-organize" className="scroll-mt-20 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="fluid-title-h2 font-bold text-white serif-font tracking-normal sm:tracking-wide">
              {data.organize.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-light">
              {data.organize.desc}
            </p>
          </div>

          {/* 大內容圖卡展示 */}
          {data.organize.image && (
            <div className="w-full max-w-3xl mx-auto rounded-2xl md:rounded-3xl overflow-hidden border border-white/15 bg-[#07141a]/40 shadow-2xl p-1.5 sm:p-2.5 transition duration-300 hover:border-[#d28b4c]/40">
              <img
                src={data.organize.image.src}
                alt={data.organize.image.alt}
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain rounded-xl md:rounded-2xl block mx-auto"
              />
            </div>
          )}
        </section>

        {/* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
            【04 三個角度 / 行星核心面向】
        ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝ */}
        <section id="course-three-angles" className="scroll-mt-20 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="fluid-title-h2 font-bold text-white serif-font tracking-normal sm:tracking-wide min-w-0 max-w-full">
              {data.threeAngles.title}
            </h2>
            {data.threeAngles.desc && (
              <p className="text-slate-300 leading-8 text-sm sm:text-base max-w-2xl mx-auto">
                {data.threeAngles.desc}
              </p>
            )}
          </div>

          {/* 三個簡短 HTML 補充說明 */}
          <div className="glass-panel rounded-2xl border border-white/10 px-5 py-2 max-w-3xl mx-auto">
            {data.threeAngles.planets.map((planet, index) => (
              <React.Fragment key={planet.name}>
                <div className="py-5 text-left">
                  <div className="flex items-center justify-start gap-2">
                    <span className="text-xl font-serif leading-none" style={{ color: planet.color }}>
                      {planet.symbol}
                    </span>
                    <h3 className="text-lg font-bold serif-font" style={{ color: planet.color }}>
                      {planet.name}
                    </h3>
                  </div>

                  <p className="text-sm font-semibold text-white mt-1.5">
                    {planet.question}
                  </p>

                  <p className="text-sm text-slate-300 font-light leading-relaxed mt-1.5">
                    {planet.desc}
                  </p>
                </div>
                {index < data.threeAngles.planets.length - 1 && (
                  <div className="border-t border-white/10" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* 大內容圖卡展示 */}
          {data.threeAngles.image && (
            <div className="w-full max-w-3xl mx-auto rounded-2xl md:rounded-3xl overflow-hidden border border-white/15 bg-[#07141a]/40 shadow-2xl p-1.5 sm:p-2.5 transition duration-300 hover:border-[#d28b4c]/40">
              <img
                src={data.threeAngles.image.src}
                alt={data.threeAngles.image.alt}
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain rounded-xl md:rounded-2xl block mx-auto"
              />
            </div>
          )}
        </section>

        {/* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
            【05 你會在這堂課程得到什麼？】
        ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝ */}
        <section id="course-practice" className="scroll-mt-20 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="fluid-title-h2 font-bold text-white serif-font tracking-normal sm:tracking-wide">
              {data.practice.title}
            </h2>
            <p className="text-fit-wrap text-sm sm:text-base text-slate-300 font-light whitespace-pre-line">
              {data.practice.desc}
            </p>
          </div>

          {/* 流程步驟卡片 */}
          <div className="space-y-3.5 max-w-3xl mx-auto">
            {data.practice.steps.map(step => (
              <div 
                key={step.number} 
                className="glass-panel p-5 sm:p-6 rounded-2xl border border-white/10 flex items-center gap-4 transition hover:border-[#d28b4c]/40"
              >
                <div className="w-10 h-10 rounded-xl bg-[#d28b4c]/20 text-[#f4d03f] flex items-center justify-center font-mono font-bold text-base shrink-0">
                  {step.number}
                </div>
                <div className="space-y-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-white">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 可選的大圖卡 (如系列二的內容架構圖) */}
          {data.practice.cardImage && (
            <div className="w-full max-w-3xl mx-auto rounded-2xl md:rounded-3xl overflow-hidden border border-white/15 bg-[#07141a]/40 shadow-2xl p-1.5 sm:p-2.5 transition duration-300 hover:border-[#d28b4c]/40">
              <img
                src={data.practice.cardImage.src}
                alt={data.practice.cardImage.alt}
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain rounded-xl md:rounded-2xl block mx-auto"
              />
            </div>
          )}
        </section>

        {/* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
            【06 一天結束後，你會帶走什麼？】
        ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝ */}
        <section id="course-takeaway" className="scroll-mt-20 space-y-6">
          {data.takeaway.image && (
            <div className="w-full max-w-3xl mx-auto rounded-2xl md:rounded-3xl overflow-hidden border border-white/15 bg-[#07141a]/40 shadow-2xl p-1.5 sm:p-2.5 transition duration-300 hover:border-[#d28b4c]/40">
              <img
                src={data.takeaway.image.src}
                alt={data.takeaway.image.alt}
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain rounded-xl md:rounded-2xl block mx-auto"
              />
            </div>
          )}

          <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 text-center max-w-2xl mx-auto min-w-0">
            <p className="text-fit-wrap text-slate-200 text-sm sm:text-base font-serif leading-relaxed">
              {data.takeaway.quote}
              <span className="text-[#f4d03f] font-semibold">{data.takeaway.quoteHighlight}</span>
              {data.takeaway.quoteSuffix || '。'}
            </p>
          </div>
        </section>

        {/* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
            【07 真實案例】
        ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝ */}
        <section id="course-story" className="scroll-mt-20 glass-panel rounded-3xl border border-[#d28b4c]/30 p-6 sm:p-10 space-y-6">
          <p className="text-[#d28b4c] text-sm tracking-widest">{data.story.badge}</p>
          <h2 className="fluid-title-h2 font-bold">{data.story.title}</h2>
          <blockquote className="border-l-2 border-[#d28b4c] pl-5 text-lg serif-font text-[#f4d03f] leading-8">
            {data.story.quote}
          </blockquote>
          {data.story.introParagraphs.map((para, i) => (
            <p key={i} className="text-slate-300 leading-8 text-sm sm:text-base">
              {para}
            </p>
          ))}
          <p className="text-white">{data.story.actionIntro}</p>
          <ul className="space-y-4 text-sm text-slate-300 leading-7">
            {data.story.actions.map((act, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-[#d28b4c]" aria-hidden="true">✓</span>
                <span>
                  <strong className="text-white">{act.label}</strong>
                  {act.desc}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-[#f4d03f] leading-8">{data.story.conclusion}</p>
        </section>

        {/* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
            【08 為什麼我們使用占星？】
        ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝ */}
        <section id="course-why-astrology" className="scroll-mt-20 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="fluid-title-h2 font-bold text-white serif-font tracking-normal sm:tracking-wide">
              {data.whyAstrology.title}
            </h2>
          </div>

          <div className="glass-panel p-6 sm:p-9 rounded-3xl border border-[#d28b4c]/30 shadow-2xl space-y-6 relative overflow-hidden max-w-3xl mx-auto">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d28b4c]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              {data.whyAstrology.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
              <p className="text-white font-medium pt-2 border-t border-white/10">
                {data.whyAstrology.highlightParagraph}
              </p>
            </div>
          </div>
        </section>

        {/* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
            【09 誰會陪你完成這一天？】
        ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝ */}
        <section id="course-instructors" className="scroll-mt-20 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="fluid-title-h2 font-bold text-white serif-font tracking-normal sm:tracking-wide">
              {data.instructors.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
            {data.instructors.list.map(instructor => (
              <div key={instructor.name} className="overflow-hidden rounded-3xl">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
            【10 活動資訊】
        ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝ */}
        <section id="course-info-details" className="scroll-mt-20 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="fluid-title-h2 font-bold text-white serif-font tracking-normal sm:tracking-wide">
              {data.details.title}
            </h2>
          </div>

          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/15 shadow-2xl space-y-6 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* 左側：活動資訊明細 */}
              <div className="lg:col-span-7 space-y-4">
                {/* 時間與日期 */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="flex items-center gap-1.5 text-[#f4d03f] text-xs font-semibold uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5" />
                    <span>活動時間</span>
                  </div>
                  <p className="text-base sm:text-lg font-bold text-white">
                    {data.details.time}
                  </p>
                </div>

                {/* 報名費用與早鳥 */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2.5">
                  <div className="flex items-baseline gap-3">
                    <span className="text-[#d28b4c] text-sm font-semibold">
                      報名費用
                    </span>
                    <span className="text-2xl font-bold text-white">
                      {data.details.price}
                    </span>
                  </div>
                  
                  <div className="p-2.5 rounded-lg bg-[#f4d03f]/10 border border-[#f4d03f]/30">
                    <p className="text-[#f4d03f] text-xs sm:text-sm font-bold leading-relaxed flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 shrink-0" />
                      <span>{data.details.earlyBird}</span>
                    </p>
                  </div>
                </div>

                {/* 地點文字 */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="flex items-center gap-1.5 text-[#f4d03f] text-xs font-semibold uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5 text-[#d28b4c]" />
                    <span>活動地點</span>
                  </div>
                  <p className="text-base font-bold text-white">{data.details.locationName}</p>
                  <p className="text-xs text-slate-300">{data.details.locationAddress}</p>
                </div>
              </div>

              {/* 右側：地圖與報名狀態 */}
              <div className="lg:col-span-5 space-y-3">
                {/* 嵌入式活動地圖 */}
                <div className="rounded-xl overflow-hidden border border-white/10 bg-[#07141a] h-48 sm:h-56 lg:h-[220px] w-full relative shadow-inner">
                  <iframe
                    title={`${data.details.locationName} 活動地點`}
                    src={data.details.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>

                {/* 開啟 Google 地圖按鈕 */}
                <a
                  id="open-google-maps-btn"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.details.mapQuery)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-white/5 hover:bg-[#d28b4c]/20 text-slate-200 hover:text-[#f4d03f] text-xs font-medium border border-white/10 transition cursor-pointer"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#d28b4c]" />
                  <span>開啟 Google 地圖導航</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                {/* 報名按鈕或尚未開放標籤 */}
                <div className="pt-2">
                  {data.details.registrationOpen ? (
                    <button
                      id="details-register-btn"
                      onClick={() => onNavigate(data.details.registerPath || '/register')}
                      className="btn-amber w-full py-3 rounded-xl text-base font-bold inline-flex items-center justify-center gap-2 cursor-pointer shadow-lg transition hover:scale-[1.02]"
                    >
                      <span>我要報名</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <div className="rounded-xl bg-white/5 border border-white/15 p-3.5 text-center text-[#f4d03f] font-semibold text-sm">
                      {data.details.registerNotice || '報名尚未開放，敬請期待。'}
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
            【11 常見問題 FAQ】
        ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝ */}
        <section id="course-faq" className="scroll-mt-20 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="fluid-title-h2 font-bold text-white serif-font tracking-normal sm:tracking-wide">
              常見問題 FAQ
            </h2>
          </div>

          <div className="space-y-3 max-w-3xl mx-auto">
            {data.faqs.map((faq, idx) => (
              <div key={idx} className="glass-panel rounded-2xl border border-white/10 overflow-hidden transition">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition"
                >
                  <span className="font-semibold text-sm sm:text-base text-white">
                    {faq.question}
                  </span>
                  {openFaqIndex === idx ? (
                    <ChevronUp className="w-4 h-4 text-[#f4d03f] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaqIndex === idx && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 space-y-2 bg-white/[0.02]">
                    {faq.answer.map((ans, aIdx) => (
                      <p key={aIdx}>{ans}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
            【12 FINAL CTA】
        ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝ */}
        <section id="course-final-cta" className="pt-4 pb-2 text-center space-y-6">
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-[#d28b4c]/50 bg-gradient-to-b from-[#162f3a]/90 via-[#0b1d26] to-[#07141a] shadow-2xl space-y-5 max-w-3xl mx-auto">
            <h3 className="text-[clamp(1rem,4.5vw,1.875rem)] font-bold text-white serif-font tracking-normal sm:tracking-wide leading-relaxed">
              <span className="whitespace-nowrap">{data.finalCta.headline1}</span>
              <span className="block sm:inline whitespace-nowrap">{data.finalCta.headline2}</span>
            </h3>
            
            <p className="text-fit-wrap text-sm sm:text-lg text-white font-serif font-semibold leading-relaxed whitespace-pre-line">
              {data.finalCta.body}
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-300 font-light">
              <span>{data.finalCta.tagDate}</span>
              <span>•</span>
              <span className="text-[#f4d03f] font-medium">{data.finalCta.tagPrice}</span>
            </div>

            <div className="pt-2">
              {data.finalCta.registrationOpen ? (
                <button
                  id="course-final-register-btn"
                  onClick={() => onNavigate(data.finalCta.registerPath || '/register')}
                  className="btn-amber px-8 sm:px-12 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-bold inline-flex items-center gap-2.5 cursor-pointer shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <span>立即報名</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              ) : (
                <div className="inline-block px-8 py-3.5 rounded-full bg-white/5 border border-white/15 text-[#f4d03f] font-semibold text-base sm:text-lg">
                  {data.finalCta.notice || '報名尚未開放，敬請期待。'}
                </div>
              )}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};
