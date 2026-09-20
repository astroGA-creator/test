import React, { useState } from 'react';
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react';
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

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Main Navigation Bar */}
      <div className="bg-[#0b1d26]/90 backdrop-blur-md py-3 px-4 sm:px-6 lg:px-12 flex justify-between items-center border-b border-white/10 shadow-lg">
        {/* Brand Logo & Name */}
        <button
          onClick={() => handleNavClick('/')}
          className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
        >
          <img
              src="/images/logo_icon.png"
              alt="Galaxy Answers 星聲工作室"
              className="w-10 h-10 object-contain"
            />
          <div className="flex flex-col">
            <span className="text-sm md:text-base font-bold tracking-wider text-[#d28b4c] leading-tight group-hover:text-[#f4d03f] transition-colors">
              Galaxy Answers 星聲工作室
            </span>
            <span className="text-xs md:text-sm tracking-wide text-slate-400">
              由心而生，探索星聲
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <button
            id="nav-link-brand"
            onClick={() => handleNavClick('/')}
            className={`text-sm font-medium transition-colors cursor-pointer py-1 relative ${
              currentPath === '/'
                ? 'text-[#f4d03f] font-semibold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            品牌介紹
            {currentPath === '/' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#f4d03f] rounded-full" />
            )}
          </button>

          <button
            id="nav-link-course"
            onClick={() => handleNavClick('/course')}
            className={`text-sm font-medium transition-colors cursor-pointer py-1 relative flex items-center gap-1.5 ${
              currentPath === '/course' || currentPath.startsWith('/course')
                ? 'text-[#f4d03f] font-semibold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <span>課程</span>
            {(currentPath === '/course' || currentPath.startsWith('/course')) && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#f4d03f] rounded-full" />
            )}
          </button>

          <button
            id="nav-link-register"
            onClick={() => handleNavClick('/register')}
            className={`px-5 py-1.5 rounded-full text-xs md:text-sm font-bold transition cursor-pointer flex items-center gap-1.5 ${
              currentPath === '/register'
                ? 'bg-[#f4d03f] text-[#0b1d26] shadow-[0_0_20px_rgba(244,208,63,0.5)]'
                : 'btn-amber'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>立即報名</span>
          </button>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
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

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0b1d26]/95 backdrop-blur-xl border-b border-white/10 px-6 py-5 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3">
            <button
              onClick={() => handleNavClick('/')}
              className={`text-left py-2 px-3 rounded-xl text-sm font-medium transition flex items-center justify-between cursor-pointer ${
                currentPath === '/'
                  ? 'bg-white/10 text-[#f4d03f] font-semibold'
                  : 'text-slate-300 hover:bg-white/5'
              }`}
            >
              <span>品牌介紹</span>
              {currentPath === '/' && <span className="text-[#f4d03f] text-xs">✦</span>}
            </button>

            <button
              onClick={() => handleNavClick('/course')}
              className={`text-left py-2 px-3 rounded-xl text-sm font-medium transition flex items-center justify-between cursor-pointer ${
                currentPath === '/course' || currentPath.startsWith('/course')
                  ? 'bg-white/10 text-[#f4d03f] font-semibold'
                  : 'text-slate-300 hover:bg-white/5'
              }`}
            >
              <div className="flex items-center">
                <span>課程</span>
              </div>
              {(currentPath === '/course' || currentPath.startsWith('/course')) && <span className="text-[#f4d03f] text-xs">✦</span>}
            </button>

            <button
              onClick={() => handleNavClick('/register')}
              className="mt-2 btn-amber w-full py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <span>立即報名活動</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
