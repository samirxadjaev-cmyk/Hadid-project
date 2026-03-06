import React from "react";
import { CatalogCard } from "../components/CatalogCard";
import Link from "next/link";
import { carInfo } from "../data";

export default function Catalog() {
  const filters = [
    "Марка",
    "Кузов",
    "Состояния",
    "Привод",
    "Запас хода",
    "Цена",
    "Сортировка по",
  ];
  const activeTags = ["Задний", "Седан", "До 400км", "Дизель", "До 100тыс"];

  return (
    <section className=" text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-2 text-xs text-neutral-500 mb-8">
          <span>Главная</span>
          <span>/</span>
          <span className="text-white">Каталог</span>
        </div>

        <div className="bg-[#1a1a1a] rounded-full p-2 mb-8 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              className="px-6 py-2.5 rounded-full bg-[#262626] text-xs flex items-center gap-3 hover:bg-[#333] transition-colors"
            >
              {filter}
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                stroke="currentColor"
              >
                <path d="M1 1L5 5L9 1" />
              </svg>
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-12">
          <span className="text-lg font-medium mr-2">Результат фильтра:</span>
          {activeTags.map((tag) => (
            <div
              key={tag}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37] text-xs"
            >
              {tag}
              <button className="text-[#D4AF37] hover:text-white">✕</button>
            </div>
          ))}
          <button className="text-xs text-neutral-500 ml-4 hover:text-white">
            Очистить все
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {carInfo.map((item, i) => {
            return (
              <Link href={`/catalog/${item.id}`} key={item.id}>
                <CatalogCard
                  carName={item.carName}
                  specs={item.specs}
                  price={item.price}
                  carImg={item.carImg}
                />
              </Link>
            );
          })}
          {/* <CatalogCard price="50.000$" />
          <CatalogCard />
          <CatalogCard />
          <CatalogCard price="50.000$" />
          <CatalogCard />
          <CatalogCard />
          <CatalogCard price="50.000$" />
          <CatalogCard /> */}
        </div>

        <button
          type="submit"
          className="mt-4 px-12 py-3 rounded-full border border-[#d4af37] text-white hover:bg-[#d4af37]/10 transition-all uppercase text-[12px] tracking-widest"
        >
          Отправить
        </button>
      </div>
    </section>
  );
}
