import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { PageRoute } from '../types';

interface HeaderProps {
  currentPath: PageRoute;
  onNavigate: (path: PageRoute) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (path: PageRoute) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  const handleBrandClick = () => {
    if (currentPath === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setMobileMenuOpen(false);
      return;
    }

    onNavigate('/');
    setMobileMenuOpen(false);
    window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const navItems: { label: string; path: PageRoute; active: boolean; onClick?: () => void }[] = [
    { label: '品牌介紹', path: '/', active: currentPath === '/', onClick: handleBrandClick },
    { label: '課程總覽', path: '/course', active: currentPath.startsWith('/course') },
    { label: '星光小聚', path: '/gathering', active: currentPath === '/gathering' },
    { label: '星盤諮詢', path: '/consultation', active: currentPath === '/consultation' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="bg-[#0b1d26]/90 backdrop-blur-md py-3 px-4 sm:px-6 lg:px-12 flex justify-between items-center border-b border-white/10 shadow-lg">
        <button
          onClick={() => handleNavClick('/')}
          className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
          aria-label="回到首頁"
        >
          <img src="/images/logo_icon.png" alt="Galaxy Answers 星聲工作室" className="w-10 h-10 object-contain" />
          <div className="flex flex-col">
            <span className="text-sm md:text-base font-bold tracking-wider text-[#d28b4c] leading-tight group-hover:text-[#f4d03f] transition-colors">
              Galaxy Answers 星聲工作室
            </span>
            <span className="text-xs md:text-sm tracking-wide text-slate-400">由心而生，探索星聲</span>
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-5 lg:gap-7">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={item.onClick ?? (() => handleNavClick(item.path))}
              className={`text-sm font-medium transition-colors cursor-pointer py-1 relative ${
                item.active ? 'text-[#f4d03f] font-semibold' : 'text-slate-300 hover:text-white'
              }`}
            >
              {item.label}
              {item.active && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#f4d03f] rounded-full" />}
            </button>
          ))}
        </nav>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white focus:outline-none cursor-pointer"
            aria-label="選單開關"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#f4d03f]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0b1d26]/95 backdrop-blur-xl border-b border-white/10 px-6 py-5 shadow-2xl">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={item.onClick ?? (() => handleNavClick(item.path))}
                className={`text-left py-3 px-3 rounded-xl text-sm font-medium transition flex items-center justify-between cursor-pointer ${
                  item.active ? 'bg-white/10 text-[#f4d03f] font-semibold' : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                <span>{item.label}</span>
                {item.active && <span className="text-[#f4d03f] text-xs">✦</span>}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
