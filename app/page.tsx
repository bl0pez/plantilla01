import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import StyleGuide from "@/components/StyleGuide";

export default function Home() {
  return (
    <main className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden">
      <Header />
      <Hero />
      <Menu />
      <div className="h-[1444px]"></div>
      {/* <StyleGuide /> */}
    </main>
  );
}
