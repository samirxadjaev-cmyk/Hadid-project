import React from 'react';

const Footer = () => {
  const navLinks = [
    'Модели',
    'Каталог',
    'Блог',
    'О нас',
    'Сервис',
    'Рассрочки',
    'Trade-in',
    'Связаться с нами',
  ];

  return (
    <footer className="section-container bg-gradient-to-b py-16 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        

        <div className="flex flex-col items-center mb-12">
          <div className="w-32 h-10 mb-2">
            <svg 
              viewBox="0 0 120 40" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-full h-full"
            >

              <path d="M50 20 L10 15 L50 22" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M45 25 L15 20" stroke="white" strokeWidth="1" opacity="0.6" />

              <path d="M70 20 L110 15 L70 22" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M75 25 L105 20" stroke="white" strokeWidth="1" opacity="0.6" />
      
              <path d="M55 12 L60 8 L65 12 L60 30 L55 12Z" fill="#d4af37" />
              <path d="M50 18 H70" stroke="#d4af37" strokeWidth="1.5" />
            </svg>
          </div>
          
          <h2 className="text-3xl font-bold tracking-[0.4em] uppercase text-white">
            Hadid
          </h2>
        </div>

        <nav>
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {navLinks.map((link) => (
              <li key={link}>
                <a 
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-neutral-500 hover:text-white transition-colors duration-300 text-sm font-light tracking-wide"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-12 pt-8 border-t border-white/5 w-full text-center">
           <p className="text-[10px] text-neutral-600 uppercase tracking-widest">
             © 2026 Hadid Motors. All rights reserved.
           </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;