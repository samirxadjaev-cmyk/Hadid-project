"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  { id: "suv", name: "Audi", img: "/audi-etron.png" },
  { id: "coupe", name: "Volswagen", img: "/volswagen.svg" },
  { id: "sedan", name: "LI", img: "/li.png" },
  { id: "hatch", name: "XIAOMI", img: "/xiaomi.png" },
  { id: "universal", name: "HongQi", img: "/hongqi.png" },
];

export default function ModelsSection() {
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section className="bg-[#0f1112] text-white py-24 px-6 md:px-20 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        {/* Левая колонка: Заголовок и Авто */}
        <div className="md:col-span-8 flex flex-col">
          <div className="mb-16">
            <h2 className="text-4xl font-semibold mb-6 tracking-tight">
              Модели
            </h2>
            <p className="text-gray-500 max-w-xs text-sm leading-relaxed font-light">
              Amen minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>

          <div className="relative h-[300px] md:h-[450px] w-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeTab.id}
                src={activeTab.img}
                alt={activeTab.name}
                initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full h-full object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,0.8)]"
              />
            </AnimatePresence>
          </div>

          <div className="mt-12 group cursor-pointer inline-flex items-center gap-5 w-fit">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-white rotate-45 group-hover:rotate-0 transition-transform duration-500" />
              <span className="relative z-10 text-black text-2xl font-light">
                +
              </span>
            </div>
            <span className="uppercase tracking-[0.3em] text-[11px] font-bold text-gray-300 group-hover:text-white transition-colors">
              Узнать больше
            </span>
          </div>
        </div>

        {/* Правая колонка: Вертикальное меню */}
        <div className="md:col-span-4 flex flex-col items-end space-y-7 self-center">
          {categories.map((cat) => {
            const isActive = activeTab.id === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat)}
                className="flex items-center group outline-none"
              >
                <span
                  className={`text-right mr-5 text-sm tracking-wide transition-all duration-300 ${
                    isActive
                      ? "text-white font-medium scale-105"
                      : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  {cat.name}
                </span>

                <div className="w-16 h-[1.5px] bg-gray-800 relative overflow-hidden">
                  {isActive && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute inset-0 bg-yellow-500"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Фоновая геометрия как на макете */}
      <div className="absolute left-0 bottom-0 opacity-10 pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
          <path d="M0 400L150 250L0 100" stroke="white" strokeWidth="1" />
        </svg>
      </div>
    </section>
  );
}
