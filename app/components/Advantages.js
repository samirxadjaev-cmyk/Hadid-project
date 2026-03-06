import React from "react";

const advantages = [
  {
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    ),
    title: "Варианты Рассрочек",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
    title: "Обмен Вашего Авто В Trade-In",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
    ),
    title: "Ассортимент Электроавто С Комплектующими",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Помощь В Покупке И Продаже Авто",
  },
];

const VWLogo = () => (
  <div className="flex items-center gap-3 text-neutral-300 opacity-80 hover:opacity-100 transition-opacity">
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M7 8l3 8 2-5 2 5 3-8" />
      <path d="M12 12l2.5-6.5" />
      <path d="M12 12l-2.5-6.5" />
    </svg>
    <span className="text-sm font-medium tracking-wide">Volkswagen</span>
  </div>
);

export default function Advantages() {
  return (
    <section className="section-container  text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Наши преимущества
          </h2>
          <p className="text-neutral-500 text-base max-w-2xl mx-auto leading-relaxed">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 border-l border-t border-neutral-800/50">
          {advantages.map((item, idx) => (
            <div
              key={idx}
              className="group border-r border-b border-neutral-800/50 p-12 flex flex-col items-center text-center transition-colors hover:bg-neutral-900/30"
            >
              <div className="w-16 h-16 rounded-full bg-neutral-800/80 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-[15px] font-medium leading-snug mb-10 h-12 flex items-center">
                {item.title}
              </h3>
              <a
                href="#"
                className="text-blue-500 text-sm font-semibold underline underline-offset-8 hover:text-blue-400 transition-colors"
              >
                Подробнее
              </a>
            </div>
          ))}
        </div>

        {/* Brand Grid */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-8 justify-items-center">
          {[...Array(25)].map((_, i) => (
            <VWLogo key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
