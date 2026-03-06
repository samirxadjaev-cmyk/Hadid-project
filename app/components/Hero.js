"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar"; // Используем навбар, который сделали ранее

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Фоновое изображение */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/BG.png')",
          // Добавляем легкое затемнение, чтобы текст и навбар читались лучше
          filter: "brightness(0.9)",
        }}
      />

      {/* Навбар поверх контента */}
      <Navbar />

      {/* Основной контент */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight max-w-4xl mx-auto uppercase">
            Современные <br /> электрокары из китая
          </h1>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 px-10 py-3 border border-white/30 rounded-full bg-white/10 backdrop-blur-md text-[12px] uppercase tracking-[0.2em] font-medium hover:bg-white hover:text-black transition-all duration-300"
          >
            Подробнее
          </motion.button>
        </motion.div>

        {/* Декоративная стрелка вниз */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="flex flex-col items-center">
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="block"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M7 10l5 5 5-5" />
              </svg>
            </motion.span>
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}
              className="block -mt-3 opacity-50"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M7 10l5 5 5-5" />
              </svg>
            </motion.span>
          </div>
        </motion.div>
      </div>

      {/* Виньетка по краям для глубины */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/40 via-transparent to-black/60" />
    </section>
  );
}
