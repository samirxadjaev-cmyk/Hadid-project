import React from 'react';

export default function ComingSoon() {
  return (
    <main className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center text-white">
      
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("comingsoon.png")', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 mb-20 flex flex-col items-center">
         <div className="w-24 mb-2">
            <svg viewBox="0 0 100 40" className="fill-white w-full h-full">
                <path d="M50 5 L70 15 L95 15 L75 25 L50 35 L25 25 L5 15 L30 15 Z" fill="none" stroke="white" strokeWidth="1" />
                <path d="M40 18 L60 18 M45 22 L55 22" stroke="#d4af37" strokeWidth="2" />
            </svg>
         </div>
         <span className="text-sm tracking-[0.4em] uppercase font-light">Hadid</span>
      </div>

      <div className="relative z-10 text-center max-w-3xl px-6">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
          Мы скоро запустим наш сайт
        </h1>
        
        <p className="text-neutral-300 text-sm md:text-base mb-10 max-w-2xl mx-auto leading-relaxed opacity-80">
          В настоящее время мы усердно работаем над этой страницей. 
          Подпишитесь на нашу рассылку, чтобы получать обновления о том, когда она будет доступна
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-0 max-w-lg mx-auto overflow-hidden rounded-md border border-white/20">
          <input 
            type="email" 
            placeholder="Введите Email адрес" 
            className="w-full bg-white/10 backdrop-blur-md px-6 py-4 outline-none placeholder:text-neutral-400 text-sm"
          />
          <button className="w-full md:w-auto bg-[#1a1a1a] hover:bg-black text-white px-8 py-4 text-sm font-medium border-l border-white/20 flex items-center justify-center gap-2 transition-all group">
            Подписаться
            <span className="text-[#d4af37] group-hover:translate-x-1 transition-transform">❯</span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 z-10 flex gap-8">
        {['instagram', 'facebook', 'telegram'].map((platform) => (
          <a key={platform} href="#" className="opacity-80 hover:opacity-100 transition-opacity">
             <div className="w-6 h-6 border border-white/30 rounded-full flex items-center justify-center p-1">
                <div className="w-full h-full bg-white rounded-full opacity-80" />
             </div>
          </a>
        ))}
      </div>

    </main>
  );
}