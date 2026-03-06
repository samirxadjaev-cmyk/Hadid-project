import React from 'react';

export default function Contact() {
  return (
    <section className="section-container text-white pt-20 relative overflow-hidden">
   
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        <div>
          <h2 className="text-4xl font-bold mb-6">Связаться с нами</h2>
          <p className="text-neutral-400 mb-12 max-w-md leading-relaxed text-sm">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit.
          </p>

          <form className="space-y-10">
            <input type="text" placeholder="Ваше имя" className="w-full bg-transparent border-b border-neutral-700 py-3 focus:outline-none focus:border-white transition-colors placeholder:text-neutral-500" />
            <div className="flex items-center gap-4 border-b border-neutral-700 py-3">
              <span className="text-neutral-500">+998</span>
              <input type="tel" placeholder="Введите номер телефона" className="w-full bg-transparent focus:outline-none placeholder:text-neutral-500" />
            </div>
            <input type="text" placeholder="Сообщения" className="w-full bg-transparent border-b border-neutral-700 py-3 focus:outline-none focus:border-white transition-colors placeholder:text-neutral-500" />
            <button type="submit" className="mt-4 px-12 py-3 rounded-full border border-[#d4af37] text-white hover:bg-[#d4af37]/10 transition-all uppercase text-[12px] tracking-widest">
              Отправить
            </button>
          </form>
        </div>

        <div className="bg-[#161616] p-10 md:p-16">
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="w-6 h-6 border border-neutral-500 rounded-sm flex items-center justify-center text-[10px]"><img src="home.png" alt="home-logo" /></div>
              <div>
                <h4 className="font-medium mb-2 text-sm">Наше адрес:</h4>
                <p className="text-neutral-400 text-xs">Сергелийский район, ТКАД. Ориентир: Мост Сергели</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-6 h-6 border border-neutral-500 rounded-sm flex items-center justify-center text-[10px]"><img src="time.png" alt="time-logo" /></div>
              <div>
                <h4 className="font-medium mb-2 text-sm">Рабочий график:</h4>
                <p className="text-neutral-400 text-xs">ПН – ПТ: с 09:00 до 20:00</p>
                <p className="text-neutral-400 text-xs">СБ – ВС: с 10:00 до 20:00</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div  className="w-6 h-6 border border-neutral-500 rounded-sm flex items-center justify-center text-[10px]"> <img src="call.png" alt="call-logo" /></div>
               <div>
                 <h4 className="font-medium mb-2 text-sm">Отдел продаж:</h4>
                <p className="text-neutral-400 text-xs">+998 93 335 40 18</p>
                <p className="text-neutral-400 text-xs">+998 93 335 40 18</p>
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[400px] grayscale contrast-125 border-t border-neutral-800">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.1065275816!2d69.3245456!3d41.3271701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4fa3f67756f%3A0x6b6982701f2f849!2zQnV5dWsgSXBhayBZdWxpIFN0LCBUYXNoa2VudA!5e0!3m2!1sen!2suz!4v1709300000000!5m2!1sen!2suz" 
          className="w-full h-full border-0"
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </div>

    </section>
  );
}