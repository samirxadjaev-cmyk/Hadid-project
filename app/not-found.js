import React from "react";

export default function NotFound() {
  return (
    <main className="relative w-full h-screen bg-[#000000] flex items-center justify-center overflow-hidden">
      <div
        className="absolute right-100 top-0 h-full w-full z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'url("ball.png")',
          backgroundSize: "contain",
          backgroundPosition: "left center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <h1 className="text-[140px] md:text-[220px] font-bold text-[#D4AF37] leading-none mb-2 select-none">
          404
        </h1>

        <h2 className="text-white text-2xl md:text-3xl font-medium mb-4">
          Страница не найдено
        </h2>

        <p className="text-neutral-500 text-sm md:text-base max-w-sm mb-12 leading-relaxed">
          Это страница не найдено или его не существует
        </p>

        <a
          href="/"
          className="px-12 py-3 rounded-full border border-[#D4AF37] text-white text-[10px] uppercase tracking-[0.3em] hover:bg-[#D4AF37] hover:text-black transition-all duration-500"
        >
          Вернуться на главную
        </a>
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-black/20 to-black" />
    </main>
  );
}
