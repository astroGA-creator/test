import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  Sparkles,
  Sun,
  Moon,
  Heart,
  ShieldCheck,
  Mail,
  BookOpen,
  ChevronDown,
  AlertCircle,
  Clock
} from 'lucide-react';
import type { PageRoute } from '../types';

interface EventRegisterPageProps {
  onNavigate: (path: PageRoute) => void;
}

export const EventRegisterPage: React.FC<EventRegisterPageProps> = ({ onNavigate }) => {
  // 確保 Tally Embed 自動觸發加載
  useEffect(() => {
      const loadTally = () => {
        const Tally = (window as any).Tally;
    
        if (Tally) {
          Tally.loadEmbeds();
        }
      };
    
      if ((window as any).Tally) {
        loadTally();
      } else {
        const script = document.createElement('script');
        script.src = 'https://tally.so/widgets/embed.js';
        script.onload = loadTally;
        script.onerror = loadTally;
        document.body.appendChild(script);
      }
    }, []);

        useEffect(() => {
          const handleTallySubmit = async (event: MessageEvent) => {
            if (typeof event.data !== 'string' || !event.data.includes('Tally.FormSubmitted')) {
              return;
            }
      
            try {
              const message = JSON.parse(event.data);
      
              if (message.event !== 'Tally.FormSubmitted') {
                return;
              }
      
              const payload = message.payload;
      
              // 找到 Tally 的「報名費用」計算欄位
              const calculatedField = payload?.fields?.find(
                (field: any) =>
                  field.type === 'CALCULATED_FIELDS' &&
                  typeof field.title === 'string' &&
                  field.title.includes('報名費用')
              );
      
              if (!calculatedField) {
                console.error('找不到 Tally 報名費用計算欄位');
                return;
              }
      
              const amount = Number(
                calculatedField.answer?.value ?? calculatedField.answer?.raw
              );
      
              if (!Number.isFinite(amount) || amount <= 0) {
                console.error('Tally 報名費用不是有效金額:', calculatedField.answer);
                return;
              }
      
              console.log('Tally 最終報名費用:', amount);
      
              // 把 Tally 算好的價格送到我們的 Vercel 後端
              const response = await fetch('/api/ecpay/create-order', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  amount,
                  itemName: '人生星方向系列二｜活動報名',
                  tradeDesc: 'Galaxy Answers 星聲工作室活動報名',
                  submissionId: payload.id,
                }),
              });
      
              if (!response.ok) {
                const errorText = await response.text();
                console.error('建立綠界訂單失敗:', errorText);
                alert('付款頁面建立失敗，請稍後再試。');
                return;
              }
      
              // 後端會回傳一個自動送往綠界的 HTML
              const html = await response.text();
      
              // 先讓使用者看到確認訊息，停留 5 秒
              let countdown = 5;
      
              const overlay = document.createElement('div');
              overlay.id = 'ecpay-loading-overlay';
              overlay.style.cssText = `
                position: fixed;
                inset: 0;
                z-index: 99999;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #0b1d26;
                color: white;
                text-align: center;
                padding: 24px;
                font-family: "Noto Sans TC", sans-serif;
              `;
      
              overlay.innerHTML = `
                <div style="width: 100%; max-width: 520px;">
                  <div style="
                    font-size: 32px;
                    color: #d28b4c;
                    margin-bottom: 20px;
                  ">✦</div>
      
                  <h1 style="
                    font-family: "Noto Serif TC", serif;
                    font-size: 28px;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    margin-bottom: 16px;
                  ">
                    報名資料已送出
                  </h1>
      
                  <p style="
                    font-size: 16px;
                    line-height: 1.9;
                    color: rgba(255,255,255,0.8);
                    margin-bottom: 24px;
                  ">
                    正在為你準備付款頁面<br />
                    請稍候
                  </p>
      
                  <div id="ecpay-countdown" style="
                    font-size: 42px;
                    font-weight: 600;
                    color: #f4d03f;
                    line-height: 1;
                    margin-bottom: 12px;
                  ">
                    ${countdown}
                  </div>
      
                  <p style="
                    font-size: 13px;
                    color: rgba(255,255,255,0.5);
                  ">
                    即將前往綠界付款
                  </p>
                </div>
              `;
      
              document.body.appendChild(overlay);
      
              const countdownElement = document.getElementById('ecpay-countdown');
      
              const timer = window.setInterval(() => {
                countdown -= 1;
      
                if (countdownElement) {
                  countdownElement.textContent = String(countdown);
                }
      
                if (countdown <= 0) {
                  window.clearInterval(timer);
      
                  // 5 秒後才前往綠界
                  document.open();
                  document.write(html);
                  document.close();
                }
              }, 1000);
            } catch (error) {
              console.error('Tally → ECPay 串接錯誤:', error);
              alert('付款頁面建立失敗，請稍後再試。');
            }
          };
      
          window.addEventListener('message', handleTallySubmit);
      
          return () => {
            window.removeEventListener('message', handleTallySubmit);
          };
        }, []);
  const [openInfoIndex, setOpenInfoIndex] = useState<number | null>(0);

  const toggleInfo = (index: number) => {
    setOpenInfoIndex(openInfoIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen">
      {/* 頂部預留高度 (對應固定 Header) */}
      <div className="h-16" />

      <main className="container mx-auto px-4 sm:px-6 py-8 md:py-12 max-w-4xl relative z-10">
        {/* 頂部導航按鈕 */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <button
            id="register-back-course"
            onClick={() => onNavigate('/course')}
            className="btn-outline-amber px-4 py-2 rounded-full text-xs md:text-sm font-medium flex items-center gap-2 cursor-pointer transition hover:-translate-x-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>返回活動資訊</span>
          </button>

          <button
            onClick={() => onNavigate('/')}
            className="text-xs text-slate-400 hover:text-[#f4d03f] transition flex items-center gap-1 cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>品牌介紹</span>
          </button>
        </div>

        {/* 報名頁頂部資訊區塊 (專注於報名) */}
        <div className="glass-panel p-6 sm:p-10 rounded-[2rem] border border-white/10 shadow-2xl mb-8 text-center space-y-5 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-[#d28b4c]/15 rounded-full blur-3xl pointer-events-none" />

          {/* 系列名稱與行星 */}
              <div className="space-y-3">
                <h2 className="fluid-title-h2 font-bold text-[#f4d03f] serif-font">
                  【人生星方向系列二】
                </h2>
              
                <p className="text-base sm:text-lg md:text-xl font-semibold text-slate-100 flex items-center justify-center gap-3">
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#f4d03f] text-2xl leading-none">☉</span>
                    太陽
                  </span>
              
                  <span className="text-slate-400">、</span>
              
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#9aaabd] text-2xl leading-none">☿</span>
                    水星
                  </span>
              
                  <span className="text-slate-400">、</span>
              
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#f08a3c] text-2xl leading-none">♃</span>
                    木星
                  </span>
                </p>
              </div>

          {/* 主題 */}
          <div className="pt-1.5 pb-2.5 border-t border-b border-white/10 max-w-xl mx-auto px-1">
            <h1 className="fluid-title-h1 font-bold text-white serif-font tracking-normal sm:tracking-wide">
              <span className="title-phrase">突破表達無力感，</span>
              <span className="title-phrase text-[#d28b4c]">發揮社群影響力</span>
            </h1>
          </div>

          <div className="text-xs sm:text-sm md:text-base text-slate-300 font-light leading-relaxed space-y-3">

            {/* 時間＋地點 */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-6 min-w-0">
          
              {/* 時間 */}
              <div className="min-w-0 max-w-full text-center">
                <span>時間｜10/17（六）10:00–17:00</span>
              </div>
          
              {/* 地點 */}
              <div className="min-w-0 max-w-full text-center">
                <span>地點｜益人咖啡-台中大道店</span>
              </div>
          
            </div>
          
            {/* 報名說明 */}
            <p className="text-center">
              請填寫下方報名表單，我們將盡快與您聯繫確認。
            </p>
          
          </div>

          {/* 報名前重要資訊 */}
            <section className="mb-8 space-y-3 text-left">
            
              {/* ① 注意事項 */}
              <div className="glass-panel rounded-2xl border border-[#d28b4c]/40 overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleInfo(0)}
                  className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-white/5 transition"
                >
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-[#f4d03f] shrink-0" />
            
                    <span className="text-base sm:text-lg font-semibold text-white">
                      活動相關資訊
                    </span>
                  </div>
            
                  <ChevronDown
                    className={`w-5 h-5 text-[#f4d03f] shrink-0 transition-transform duration-300 ${
                      openInfoIndex === 0 ? 'rotate-180' : ''
                    }`}
                  />
                </button>
            
                {openInfoIndex === 0 && (
                  <div className="px-5 pb-6 pt-1 border-t border-white/10">
                    <div className="pt-4 space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed">
            
                      {/* 第 1 點 */}
                      <div className="flex items-start">
                        <span className="text-[#d28b4c] font-semibold shrink-0 w-8">
                          1.
                        </span>
                        <p className="flex-1">
                          本活動費用不包含餐點，午餐敬請自理。
                        </p>
                      </div>
            
                      {/* 第 2 點 */}
                      <div className="flex items-start">
                        <span className="text-[#d28b4c] font-semibold shrink-0 w-8">
                          2.
                        </span>
                        <p className="flex-1">
                          活動開始前 30 分鐘開放報到，請參加者準時出席。
                        </p>
                      </div>
            
                      {/* 第 3 點 */}
                      <div className="flex items-start">
                        <span className="text-[#d28b4c] font-semibold shrink-0 w-8">
                          3.
                        </span>
                        <p className="flex-1">
                          請參加者於後續表單中提供您的出生日期/時間/地點，以利聚焦講解。
                        </p>
                      </div>
            
                      {/* 第 4 點 */}
                      <div className="flex items-start">
                        <span className="text-[#d28b4c] font-semibold shrink-0 w-8">
                          4.
                        </span>
                        <p className="flex-1">
                          本次活動將攝影及錄影記錄，參與本次活動即代表您同意主辦單位使用您於活動中的肖像畫面以及照片，並於後續之活動花絮影片宣傳中使用。不將資料移作他用，更不會提供給第三人。
                        </p>
                      </div>
            
                    </div>
                  </div>
                )}
              </div>
            
              {/* ② 個人資料隱私與保密聲明 */}
              <div className="glass-panel rounded-2xl border border-[#d28b4c]/40 overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleInfo(1)}
                  className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-white/5 transition"
                >
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#f4d03f] shrink-0" />
            
                    <span className="text-base sm:text-lg font-semibold text-white">
                      個人資料隱私與保密聲明
                    </span>
                  </div>
            
                  <ChevronDown
                    className={`w-5 h-5 text-[#f4d03f] shrink-0 transition-transform duration-300 ${
                      openInfoIndex === 1 ? 'rotate-180' : ''
                    }`}
                  />
                </button>
            
                {openInfoIndex === 1 && (
                  <div className="px-5 pb-6 pt-1 border-t border-white/10">
                    <div className="pt-4 space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed">
            
                      <p>
                        感謝您提供準確的出生資訊。為維護服務品質與個人隱私，我們承諾：您所提供的出生日期、精確時間及地點，僅用於本次星盤排盤與占星分析之用途。
                      </p>
            
                      <p>
                        未經您的書面同意，我們絕不將您的個人資料（如姓名、聯絡方式）或足以辨識身分的具體私領域內容洩漏給第三方。針對具教學或研究價值的案例，我們可能在「去識別化」（即遮蔽姓名、隱藏精確出生時分、並模糊化敏感身分資訊，使他人無法辨識個案身分）的前提下進行匿名分享。
                      </p>
            
                      <p>
                        所有原始紀錄均會妥善留存並受嚴格保密，請您安心。
                      </p>
            
                    </div>
                  </div>
                )}
              </div>
            
              {/* ③ 如果您不確定出生時間 */}
              <div className="glass-panel rounded-2xl border border-[#d28b4c]/40 overflow-hidden">
            
                <button
                  type="button"
                  onClick={() => toggleInfo(2)}
                  className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-white/5 transition"
                >
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#f4d03f] shrink-0" />
            
                    <span className="text-base sm:text-lg font-semibold text-white">
                      如果您不確定出生時間
                    </span>
                  </div>
            
                  <ChevronDown
                    className={`w-5 h-5 text-[#f4d03f] shrink-0 transition-transform duration-300 ${
                      openInfoIndex === 2 ? 'rotate-180' : ''
                    }`}
                  />
                </button>
            
                {openInfoIndex === 2 && (
                  <div className="px-5 pb-6 pt-1 border-t border-white/10">
                    <div className="pt-4 space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed">
            
                      <p className="font-semibold text-[#f4d03f]">
                        您可以嘗試以下三種方法（最推薦第一種）：
                      </p>
            
                      {/* 一、戶政事務所申請 */}
                      <div className="space-y-1">
                        <p className="font-semibold text-white">
                          一、戶政事務所申請
                        </p>
            
                        <p>
                          申請地點：全國任一戶政事務所，不必回戶籍地，可跨區辦理。
                        </p>
            
                        <p>
                          應備證件：身分證正本、印章或簽名
                        </p>
            
                        <p>
                          申請費用：每份約 10 元
                        </p>
                      </div>
            
                      {/* 二、向出生醫院查詢 */}
                      <div className="space-y-1">
                        <p className="font-semibold text-white">
                          二、向出生醫院查詢
                        </p>
            
                        <p>
                          申請地點：原出生醫院的病歷室或醫事課
                        </p>
            
                        <p>
                          應備證件：身分證正本
                        </p>
            
                        <p>
                          申請費用：各家醫院不同，通常中文版約 20~200 元 不等
                        </p>
                      </div>
            
                      {/* 三、詢問家中長輩 */}
                      <div className="space-y-1">
                        <p className="font-semibold text-white">
                          三、詢問家中長輩
                        </p>
            
                        <p>
                          如果無法採用上面的兩種方式，可以詢問長輩縮小範圍。
                        </p>
            
                        <p>
                          <span className="text-[#d28b4c] font-semibold">
                            由於星座每半小時就產生變化
                          </span>
                          ，因此請透過引導提問盡可能將時間縮小到 1 個小時內。
                        </p>
            
                        <p>
                          例如：知道子時出生，進一步詢問是早子還是晚子。
                        </p>
            
                        <p>
                          例如：知道大約是 11 點出生，進一步詢問是 11 點初還是半以後。
                        </p>
            
                        <p>
                          如果仍有相關的問題，請與我們聯繫。
                        </p>
                      </div>
            
                    </div>
                  </div>
                )}
              </div>
            
            </section>
        </div>
        {/* Tally 表單預留區域 (保留原 Tally Embed 技術方式) */}
        <section id="register-form-container" className="space-y-4">
          <div className="bg-[#244758]/60 rounded-3xl overflow-hidden min-h-[600px] border border-white/10 shadow-2xl relative p-2 sm:p-4 backdrop-blur-md">
            <iframe
              id="tally-form-iframe"
                data-tally-src="https://tally.so/embed/yP5Ol6?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="800"
                frameBorder="0"
                title="Galaxy Answers 星聲工作室 報名表單"
                className="w-full border-none rounded-2xl"
            />
          </div>
        </section>

         
        {/* 頁面下方返回按鈕 */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="register-bottom-back-course"
            onClick={() => onNavigate('/course')}
            className="btn-outline-amber px-8 py-3 rounded-full text-sm font-medium inline-flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>返回活動資訊</span>
          </button>
          <button
            id="register-bottom-back-brand"
            onClick={() => onNavigate('/')}
            className="px-6 py-3 rounded-full text-sm text-slate-400 hover:text-white transition cursor-pointer"
          >
            返回品牌介紹頁面
          </button>
        </div>
      </main>
    </div>
  );
};
