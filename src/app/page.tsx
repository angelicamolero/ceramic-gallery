import Header from "@/components/ui/Header";
import Hero from "@/components/home/Hero";
import Collection from "@/components/home/Collection";
import AboutWork from "@/components/home/AboutWork";
import Footer from "@/components/ui/Footer";
import { getPieces } from "@/lib/api";

export default async function HomePage() {
  const pieces = await getPieces();

  return (
    <>
      <Header />
      <main>
        <Hero pieces={pieces} />
        <Collection />
        <AboutWork />
      </main>
      <Footer />
    </>
  );
}
