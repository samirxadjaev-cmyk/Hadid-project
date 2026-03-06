import React from "react";

const newsData = [
  {
    image: "/car1.png",
    title: "Title",
    date: "22 Май 2022",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    image: "/car2.png",
    title: "Title",
    date: "22 Май 2022",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    image: "/car3.png",
    title: "Title",
    date: "22 Май 2022",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];

export default function NewsCard() {
  return (
    <section className="section-container  text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Новости
          </h2>
          <p className="text-neutral-500 text-sm max-w-2xl mx-auto leading-relaxed">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsData.map((item, index) => (
            <div
              key={index}
              className="bg-[#161616] flex flex-col h-full overflow-hidden transition-transform duration-300 hover:scale-[1.01]"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold tracking-wide">
                    {item.title}
                  </h3>
                  <span className="text-neutral-500 text-sm">{item.date}</span>
                </div>

                <p className="text-neutral-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
