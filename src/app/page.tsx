import Header from "@/components/ui/Header";
import Hero from "@/components/home/Hero";
import Collection from "@/components/home/Collection";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Collection />
      </main>
    </>
  );
}
