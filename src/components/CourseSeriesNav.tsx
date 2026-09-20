import type { PageRoute } from '../types';

export function CourseSeriesNav({ currentPath, onNavigate }: { currentPath: PageRoute; onNavigate: (path: PageRoute) => void }) {
  const items: { path: PageRoute; label: string }[] = [
    { path: '/course', label: '課程總覽' },
    { path: '/course/series-1', label: '系列一' },
    { path: '/course/series-2', label: '系列二' },
    { path: '/course/series-3', label: '系列三' },
  ];
  return <nav aria-label="課程系列" className="relative z-10 pt-24 px-4 sm:px-6">
    <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-2 border-b border-white/10 pb-5">
      {items.map(item => <a key={item.path} href={item.path} aria-current={currentPath === item.path ? 'page' : undefined}
        onClick={event => { if (!event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) { event.preventDefault(); onNavigate(item.path); } }}
        className={`rounded-full px-4 py-2.5 text-xs sm:text-sm transition ${currentPath === item.path ? 'bg-[#d28b4c] text-white' : 'text-slate-300 bg-white/5 hover:bg-white/10'}`}>{item.label}</a>)}
    </div>
  </nav>;
}
