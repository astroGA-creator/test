import React, { useMemo } from 'react';
import {
  ArrowRight,
  BookOpen,
  Compass,
  Eye,
  HeartHandshake,
  MessageCircleHeart,
  Sparkles,
  UsersRound,
} from 'lucide-react';
import type { PageRoute } from '../types';

interface BrandInfoPageProps {
  onNavigate: (path: PageRoute) => void;
}

const services = [
  {
    eyebrow: '01 / ASTROLOGY COURSE',
    title: '人生星方向',
    subtitle: '想更深入地讀懂自己。',
    description:
      '從自己的星盤開始，循序理解行星與星座的語言，把占星變成一套能真正用在生活裡的自我理解工具。',
    cta: '查看課程',
    path: '/course' as PageRoute,
    image: '/images/course_banner_1_16_9.jpg',
    alt: '人生星方向課程',
    icon: BookOpen,
  },
  {
    eyebrow: '02 / STARLIGHT GATHERING',
    title: '星光小聚',
    subtitle: '有的吃、有的玩、有的交朋友，也一起聊聊星座。',
    description:
      '每月一次、兩小時的輕鬆聚會。一個小時聊星座，一個小時跟著不同領域的分享者體驗桌遊、香道與各種有趣主題。',
    cta: '看看星光小聚',
    path: '/gathering' as PageRoute,
    image: '/images/brandinfo_image_1.png',
    alt: '星光小聚活動氛圍',
    icon: UsersRound,
  },
  {
    eyebrow: '03 / ASTROLOGY CONSULTATION',
    title: '星盤諮詢',
    subtitle: '有些問題，值得好好聊聊。',
    description:
      '從你的星盤與正在經歷的事情出發，一對一整理工作、關係、年度方向與自我理解，陪你看見更多可以選擇的路。',
    cta: '探索星盤諮詢',
    path: '/consultation' as PageRoute,
    image: '/images/instructor_Aladdin.jpg',
    alt: '星盤諮詢',
    icon: MessageCircleHeart,
  },
];

const moments = [
  { src: '/images/series1_card1.jpg', alt: 'Galaxy Answers 活動時刻 1' },
  { src: '/images/series1_card2.jpg', alt: 'Galaxy Answers 活動時刻 2' },
  { src: '/images/series2_card1.jpg', alt: 'Galaxy Answers 活動時刻 3' },
  { src: '/images/series2_card2.jpg', alt: 'Galaxy Answers 活動時刻 4' },
  { src: '/images/series3_card1.jpg', alt: 'Galaxy Answers 活動時刻 5' },
  { src: '/images/series3_card2.jpg', alt: 'Galaxy Answers 活動時刻 6' },
];

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

  return (
    <div className="relative min-h-screen">
      <div className="h-16" />

      {/* 01 / Brand Hero */}
      <section
        id="brand-hero"
        className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center overflow-hidden px-6 text-center"
      >
        <div
          className="absolute inset-0 z-0 opacity-65 bg-cover bg-center cosmic-hero-bg pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(11, 29, 38, 0.35), rgba(11, 29, 38, 0.35)), url('/images/background_photo.png')",
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

        <div className="container mx-auto relative z-10 max-w-4xl py-12 flex flex-col items-center justify-center space-y-8 md:space-y-10">
          <div className="flex items-center justify-center mb-2">
            <img
              src="/images/logo.png"
              alt="Galaxy Answers 星聲工作室"
              className="w-56 sm:w-64 md:w-72 h-auto object-contain"
            />
          </div>

          <div className="space-y-4 px-2 min-w-0 max-w-full">
            <h1 className="fluid-title-hero font-bold text-white serif-font tracking-normal sm:tracking-wide drop-shadow-md min-w-0 max-w-full">
              由心而生，<span className="text-[#d28b4c]">探索星聲</span>
            </h1>
          </div>

          <div className="w-full max-w-2xl mx-auto px-2 min-w-0">
            <p className="text-fit-wrap text-sm sm:text-lg md:text-xl lg:text-2xl text-slate-300 font-light serif-font leading-relaxed tracking-normal sm:tracking-wide">
              用星座工具理解自己，找回信任自己的底氣
            </p>
          </div>

          <button
            onClick={() =>
              document.getElementById('brand-philosophy')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="mt-8 text-slate-300/80 hover:text-[#f4d03f] transition flex flex-col items-center gap-2 text-xs tracking-[0.25em] uppercase"
            aria-label="往下瀏覽品牌介紹"
          >
            Explore
            <span className="text-xl leading-none">↓</span>
          </button>
        </div>
      </section>

      {/* 02 / Brand Philosophy */}
      <section
        id="brand-philosophy"
        className="scroll-mt-20 container mx-auto px-6 py-20 max-w-5xl min-w-0"
      >
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
              Galaxy Answers 星聲工作室
            </h2>

            <div className="space-y-6 text-slate-200 text-base sm:text-lg md:text-xl font-light serif-font leading-relaxed text-justify min-w-0">
              <p className="text-fit-wrap border-l-2 border-[#d28b4c] pl-5 text-white/95">
                我們相信占星，不是為了替人生下定論，而是能幫助每個人理解自己，重新做出新的選擇。
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

      {/* 03 / What is Astrology - full-width banner */}
      <section id="why-astrology" className="scroll-mt-20 py-20">
        <div className="container mx-auto px-6 max-w-5xl text-center mb-10">
          <p className="text-[#f4d03f] text-xs tracking-[0.28em] uppercase mb-3">ABOUT ASTROLOGY</p>
          <h2 className="fluid-title-h2 font-bold text-white serif-font">什麼是占星？</h2>
        </div>

        <div
          className="relative w-full min-h-[320px] md:min-h-[430px] flex items-center justify-center overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(7,20,26,.88), rgba(11,29,38,.45), rgba(7,20,26,.82)), url('https://images.unsplash.com/photo-1692138525040-7b6cb0629868?auto=format&fit=crop&fm=jpg&q=82&w=2400')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b1d26]/20 via-transparent to-[#0b1d26]/55" />
          <div className="relative z-10 px-6 py-16 max-w-5xl mx-auto text-center">
            <p className="text-xs sm:text-sm text-[#f4d03f] tracking-[0.3em] uppercase mb-5">A WAY TO UNDERSTAND YOURSELF</p>
            <h3 className="text-[clamp(1.65rem,4vw,3.5rem)] font-bold text-white serif-font leading-[1.5] drop-shadow-2xl">
              不是每個人都需要學占星。
              <br />
              但每個人，都需要一套理解自己的方法。
            </h3>
          </div>
        </div>

        <div className="container mx-auto px-6 max-w-5xl pt-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl max-w-lg mx-auto">
                <img
                  src="/images/brandinfo_image_1.png"
                  alt="星聲工作室占星課程"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                占星提供一個客觀、無批判、有系統架構的方法，在生命的每一次轉折中，幫助你釐清自己與生俱來的性格特質與心理需求。
              </p>
              <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                我們透過具體的提問和拆解，帶大家看見自我的多重面向，利用星盤地圖認識完整的自己。讓生命不再矛盾、消耗或盲從，一層一層解開宇宙送給你的人生指南。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 04 / Three service paths */}
      <section id="services" className="container mx-auto px-6 py-20 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-[#f4d03f] text-xs tracking-[0.28em] uppercase mb-3">EXPLORE GALAXY ANSWERS</p>
          <h2 className="fluid-title-h2 font-bold text-white serif-font mb-5">找到適合你的探索方式</h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            不同的時刻，需要的陪伴也不一樣。從學習、相聚到一對一對話，選擇此刻最接近你的方式。
          </p>
        </div>

        <div className="space-y-10 md:space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const reverse = index % 2 === 1;
            return (
              <article
                key={service.title}
                className="group rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/[0.035] shadow-2xl"
              >
                <div className="grid md:grid-cols-2 min-h-[420px]">
                  <div className={`${reverse ? 'md:order-2' : ''} relative min-h-[280px] md:min-h-full overflow-hidden`}>
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07141a]/65 via-transparent to-transparent md:bg-gradient-to-r md:from-[#07141a]/20 md:to-transparent" />
                  </div>

                  <div className={`${reverse ? 'md:order-1' : ''} p-8 sm:p-10 md:p-12 lg:p-14 flex flex-col justify-center`}>
                    <div className="inline-flex items-center gap-2 text-[#f4d03f] text-[11px] sm:text-xs tracking-[0.2em] uppercase mb-5">
                      <Icon className="w-4 h-4" />
                      <span>{service.eyebrow}</span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-white serif-font mb-4">{service.title}</h3>
                    <p className="text-[#d28b4c] text-lg sm:text-xl serif-font font-semibold leading-relaxed mb-5">
                      {service.subtitle}
                    </p>
                    <p className="text-slate-300 text-sm sm:text-base leading-[1.9] font-light mb-8">
                      {service.description}
                    </p>
                    <button
                      onClick={() => onNavigate(service.path)}
                      className="self-start inline-flex items-center gap-2 text-[#f4d03f] font-semibold text-sm sm:text-base border-b border-[#f4d03f]/40 pb-1 hover:border-[#f4d03f] transition"
                    >
                      {service.cta}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 05 / Meet Galaxy Answers */}
      <section id="mentors" className="container mx-auto px-6 py-20 max-w-5xl">
        <div className="text-center mb-14">
          <p className="text-[#f4d03f] text-xs tracking-[0.28em] uppercase mb-3">ABOUT US</p>
          <h2 className="fluid-title-h2 font-bold text-white serif-font mb-3">認識星聲</h2>
          <p className="text-slate-400 text-sm sm:text-base">陪你一起探索、提問，也一起把占星帶回真實生活裡的人。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          <div className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center group hover:border-[#d28b4c]/50 transition duration-300 shadow-xl">
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden mentor-avatar mb-6 flex items-center justify-center bg-[#07141a]">
              <img src="/images/Gudhata.png" alt="顏惠貞 Gudhata" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-white font-bold text-xl md:text-2xl mb-1 serif-font">顏惠貞 Gudhata</h3>
            <p className="text-[#f4d03f] text-xs font-bold tracking-widest uppercase mb-1">銀河的奧秘</p>
            <p className="text-slate-400 text-sm mb-4">占星性靈導師</p>
            <p className="text-slate-300 text-sm leading-relaxed text-center font-light">
              運用古老占星智慧，以同理與溫暖的引導，陪你面對內在的焦慮與衝突，看見生命深處的禮物。
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center group hover:border-[#d28b4c]/50 transition duration-300 shadow-xl">
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden mentor-avatar mb-6 flex items-center justify-center bg-[#07141a]">
              <img src="/images/Aladdin.png" alt="阿拉丁 Aladdin" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-white font-bold text-xl md:text-2xl mb-1 serif-font">阿拉丁 Aladdin</h3>
            <p className="text-[#f4d03f] text-xs font-bold tracking-widest uppercase mb-1">星辰的榮光</p>
            <p className="text-slate-400 text-sm mb-4">星象引導顧問</p>
            <p className="text-slate-300 text-sm leading-relaxed text-center font-light">
              專注星盤應用，以清晰與務實的方法，陪你看見盲點，將星象化為自我成長的行動指引。
            </p>
          </div>
        </div>
      </section>

      {/* 06 / Galaxy Moments */}
      <section id="moments" className="container mx-auto px-6 py-20 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
          <div>
            <p className="text-[#f4d03f] text-xs tracking-[0.28em] uppercase mb-3">MOMENTS AT GALAXY ANSWERS</p>
            <h2 className="fluid-title-h2 font-bold text-white serif-font">我們一起度過的星光時刻</h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md leading-relaxed">
            課程、交流、分享與相聚。這裡先放版型示意，之後可以直接換成你們最喜歡的活動照片。
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-12 auto-rows-[150px] md:auto-rows-[180px] gap-3 md:gap-4">
          {moments.map((moment, index) => {
            const spans = [
              'col-span-2 md:col-span-7 row-span-2',
              'col-span-1 md:col-span-5 row-span-1',
              'col-span-1 md:col-span-5 row-span-1',
              'col-span-1 md:col-span-4 row-span-1',
              'col-span-1 md:col-span-4 row-span-1',
              'col-span-2 md:col-span-4 row-span-1',
            ];
            return (
              <div key={moment.src} className={`${spans[index]} relative overflow-hidden rounded-2xl border border-white/10 group`}>
                <img
                  src={moment.src}
                  alt={moment.alt}
                  className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07141a]/55 via-transparent to-transparent" />
              </div>
            );
          })}
        </div>
      </section>

      {/* 07 / What's on */}
      <section id="whats-on" className="container mx-auto px-6 py-20 max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-[#f4d03f] text-xs tracking-[0.28em] uppercase mb-3">WHAT'S ON</p>
          <h2 className="fluid-title-h2 font-bold text-white serif-font mb-4">最近，可以來找我們</h2>
          <p className="text-slate-400 text-sm sm:text-base">把近期可以參加的課程與小聚放在這裡，讓首頁最後自然接到行動。</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <article className="rounded-[2rem] p-7 sm:p-8 border border-[#d28b4c]/35 bg-gradient-to-br from-[#162f3a]/90 to-[#07141a] shadow-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d28b4c]/15 border border-[#d28b4c]/30 text-[#f4d03f] text-xs font-semibold mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              人生星方向
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white serif-font mb-3">系列二・太陽／水星／木星</h3>
            <p className="text-[#d28b4c] serif-font mb-4">突破表達無力感，發揮社群影響力</p>
            <p className="text-slate-400 text-sm leading-relaxed mb-7">目前課程資訊先沿用既有內容，之後可依實際開課日期更新。</p>
            <button
              onClick={() => onNavigate('/course/series-2')}
              className="inline-flex items-center gap-2 text-[#f4d03f] font-semibold text-sm"
            >
              查看課程 <ArrowRight className="w-4 h-4" />
            </button>
          </article>

          <article className="rounded-[2rem] p-7 sm:p-8 border border-white/10 bg-white/[0.035] shadow-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#f4d03f] text-xs font-semibold mb-5">
              <UsersRound className="w-3.5 h-3.5" />
              星光小聚
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white serif-font mb-3">本月星光小聚</h3>
            <p className="text-[#d28b4c] serif-font mb-4">聊一點星座，也認識一個新的有趣主題</p>
            <p className="text-slate-400 text-sm leading-relaxed mb-7">此區先建立框架，之後可替換成當月主題、合作講師、日期與活動照片。</p>
            <button
              onClick={() => onNavigate('/gathering')}
              className="inline-flex items-center gap-2 text-[#f4d03f] font-semibold text-sm"
            >
              看看本月小聚 <ArrowRight className="w-4 h-4" />
            </button>
          </article>
        </div>
      </section>
    </div>
  );
};
