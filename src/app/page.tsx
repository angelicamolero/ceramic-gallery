import Header from "@/components/ui/Header";
import Hero from "@/components/home/Hero";
import Collection from "@/components/home/Collection";
import AboutWork from "@/components/home/AboutWork";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Collection />
        <AboutWork />
      </main>
    </>
  );
}
