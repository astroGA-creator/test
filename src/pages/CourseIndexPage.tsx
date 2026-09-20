import { ArrowRight, Calendar } from 'lucide-react';
import type { PageRoute } from '../types';

export function CourseIndexPage({ onNavigate }: { onNavigate: (path: PageRoute) => void }) {
  const courses = [
    { path: '/course/series-1' as PageRoute, number: '01', name: '系列一', planets: '太陽・月亮・金星', title: '告別盲從焦慮，站上天賦舞台', description: '從自我方向、情緒需求與價值取向出發，找到適合自己的選擇方式。', date: '12/19（六）10:00–17:00', place: '益人咖啡－台中大道店', image: '/images/course_banner_1_16_9.jpg' },
    { path: '/course/series-2' as PageRoute, number: '02', name: '系列二', planets: '太陽・水星・木星', title: '突破表達無力感，發揮社群影響力', description: '突破表達障礙，掌握思考脈絡與群眾魅力，完成一份屬於自己的表達策略。', date: '10/17（六）10:00–17:00', place: '益人咖啡－台中大道店', image: '/images/course_banner_2_16_9.jpg' },
    { path: '/course/series-3' as PageRoute, number: '03', name: '系列三', planets: '太陽・火星・土星', title: '推進目標達成，實現願景藍圖', description: '解析內在動能，清晰自律法則，建立一套能持續完成目標的實踐系統。', date: '11/22（日）10:00–17:00', place: '益人咖啡－台中大道店', image: '/images/course_banner_3_16_9.jpg' },
  ];
  return <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-24">
    <header className="text-center max-w-2xl mx-auto mb-12 space-y-5">
      <p className="text-xs tracking-[0.3em] text-[#d28b4c]">GALAXY ANSWERS · COURSES</p>
      <h1 className="fluid-title-hero text-white font-bold">人生星方向</h1>
      <p className="text-lg text-[#f4d03f] serif-font">從理解自己開始，找到下一步。</p>
      <p className="text-sm sm:text-base text-slate-300 leading-relaxed">把占星帶回生活，透過比對、討論與練習，探索自己的可能。<br className="hidden sm:block" />選擇你想深入了解的課程。</p>
    </header>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
      {courses.map(course => <article key={course.path} className="glass-panel rounded-3xl border border-white/15 overflow-hidden flex flex-col hover:border-[#d28b4c]/60 transition">
        <img src={course.image} alt={`${course.name} ${course.planets}核心架構`} className="w-full aspect-video object-contain bg-[#f6f1e9]" />
        <div className="p-6 sm:p-8 flex flex-col flex-1 gap-5">
          <div className="flex items-center justify-between"><p className="text-[#d28b4c] font-semibold">{course.name}</p><span className="text-3xl text-white/20 serif-font">{course.number}</span></div>
          <div className="space-y-3"><p className="text-[#f4d03f] text-sm tracking-wider">{course.planets}</p><h2 className="text-xl sm:text-2xl font-bold leading-relaxed">{course.title}</h2><p className="text-sm text-slate-300 leading-7">{course.description}</p></div>
          <div className="mt-auto pt-3 space-y-2 text-sm text-slate-300"><p className="flex items-center gap-2"><Calendar size={16} className="text-[#d28b4c]" />{course.date}</p><p>{course.place}</p></div>
          <a href={course.path} onClick={event => { if (!event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) { event.preventDefault(); onNavigate(course.path); } }} className="btn-outline-amber rounded-full px-5 py-3 flex justify-between items-center text-sm">探索{course.name}<ArrowRight size={16} /></a>
        </div>
      </article>)}
    </div>
  </main>;
}
