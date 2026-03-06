import React from "react";
import Hero from "./components/Hero";
import Models from "./components/Models";
import Advantages from "./components/Advantages";
import NewsCard from "./components/NewsCard";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; 

function page() {
  return (
     <main className=" min-h-screen">
      <Advantages />
      <NewsCard />
      <Contact />
      <Hero />
      <Models />
    </main>
  );
}