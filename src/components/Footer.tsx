import React from 'react';
import type { PageRoute } from '../types';

interface FooterProps {
  onNavigate?: (path: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-[#07141a] pt-16 pb-12 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Footer Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 text-center md:text-left">

          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-base sm:text-lg font-bold text-[#d28b4c]">
                Galaxy Answers 星聲工作室
              </span>
            </div>

            <p className="text-[#f4d03f]/90 text-xs font-serif">
              由心而生，探索星聲
            </p>

            <p className="text-slate-400 text-xs leading-relaxed max-w-md mx-auto md:mx-0">
              用星座工具理解自己，找回信任自己的底氣<br />
              主題課程 | 占星諮詢 | 占星證照班
            </p>
          </div>

          {/* Follow Us */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

            {/* Social Media */}
            <div className="space-y-3">
              <h4 className="text-[#f4d03f] text-xs font-bold uppercase tracking-widest">
                追蹤我們
              </h4>

              <div className="flex flex-col gap-2 text-xs">

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/astrogalaxyanswers/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-[#f4d03f] transition"
                >
                  Instagram
                </a>

                {/* Facebook 1 */}
                <a
                  href="https://www.facebook.com/profile.php?id=61589736442278"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-[#f4d03f] transition"
                >
                  Facebook 粉絲專頁
                </a>

                {/* Facebook 2 */}
                <a
                  href="https://www.facebook.com/Gudhata"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-[#f4d03f] transition"
                >
                  Ｇ老師奧秘星空 粉絲專頁
                </a>

              </div>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <h4 className="text-[#f4d03f] text-xs font-bold uppercase tracking-widest">
                聯絡我們
              </h4>

              <div className="flex flex-col gap-2 text-xs">

                {/* Email */}
                <p className="text-slate-400">
                  <a
                    href="mailto:astrogalaxyanswers@gmail.com"
                    className="hover:text-[#f4d03f] transition"
                  >
                    astrogalaxyanswers@gmail.com
                  </a>
                </p>

                {/* LINE */}
                <a
                  href="https://lin.ee/WrnBYmS"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-[#f4d03f] transition"
                >
                  LINE 官方帳號
                </a>

              </div>
            </div>

          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p className="flex items-center gap-2">
            © {new Date().getFullYear()} Galaxy Answers 星聲工作室. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
