'use client'
import { useParams } from "next/navigation";
import React from "react";
import { carInfo } from "@/app/data";

function page() {
  const params = useParams();
  const id = params.id;
  const car = carInfo.find((element) => element.id.toString() === id);

  console.log(car)
  if (!car) {
    return (
      <div className="container mx-auto mt-[100px] p-10 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Link href="/products" className="btn btn-link">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <section className="relative w-full h-[80vh] flex items-center overflow-hidden">
   
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("back-logo.png")', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="section-container relative z-10 text-white">

        <div className="flex gap-2 text-xs text-neutral-400 mb-12 font-light">
          <span>Главная</span> / <span>Каталог</span> / <span className="text-white">Volkswagen ID.6</span>
        </div>

        <div className="max-w-2xl">
          <p className="text-lg mb-4 font-light">Volkswagen ID.6</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight">
            Премиум электрокар стиль и удобство в одной машине
          </h1>
        </div>
      </div>
    </section>
  );
}

export default page;
