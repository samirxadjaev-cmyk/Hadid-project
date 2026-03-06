"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

export default function Navbar() {
  const [activeLang, setActiveLang] = useState("Рус");

  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-6 md:px-20 text-white bg-gradient-to-b from-black/50 to-transparent backdrop-blur-[2px]">
      {/* Навигационные ссылки */}
      <div className="hidden md:flex items-center space-x-8 text-[13px] font-light tracking-wide uppercase">
        <Link href="/models" className="hover:text-gray-300 transition-colors">
          Модели
        </Link>
        <Link href="/blog" className="hover:text-gray-300 transition-colors">
          Блог
        </Link>
        <Link href="/about" className="hover:text-gray-300 transition-colors">
          О нас
        </Link>
        <Link href="/service" className="hover:text-gray-300 transition-colors">
          Сервис
        </Link>
      </div>

      {/* Центральный логотип */}
      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="flex items-center gap-1">
          <div className="w-6 h-[1px] bg-white opacity-50" />
          <div className="w-2 h-2 border-t border-r border-white rotate-45" />
          <div className="w-6 h-[1px] bg-white opacity-50" />
        </div>
        <span className="text-xl font-bold tracking-[0.4em] mt-1">HADID</span>
      </div>

      {/* Правая часть: Язык, Поиск, Контакты */}
      <div className="flex items-center space-x-6">
        <div className="flex items-center gap-1 cursor-pointer group">
          <span className="text-[13px] uppercase tracking-wider">
            {activeLang}
          </span>
          <svg
            className="w-3 h-3 group-hover:translate-y-0.5 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        <button className="hover:opacity-70 transition-opacity">
          <Search size={18} strokeWidth={1.5} />
        </button>

        <Link
          href="/contact"
          className="border border-white/40 rounded-full px-5 py-2 text-[12px] uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
        >
          Связаться с нами
        </Link>
      </div>
    </nav>
  );
}
