import Advantages from "./components/Advantages";
import NewsCard from "./components/NewsCard";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; 


export default function Page() {
  return (
    <main className=" min-h-screen">
      <Advantages />
      <NewsCard />
      <Contact />
    </main>
  );
}