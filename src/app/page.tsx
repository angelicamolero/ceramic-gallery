import Hero from "@/components/home/Hero";
import Collection from "@/components/home/Collection";
import AboutWork from "@/components/home/AboutWork";
import { getPieces } from "@/lib/api";

export default async function HomePage() {
  const pieces = await getPieces();

  return (
    <main>
      <Hero pieces={pieces} />
      <Collection />
      <AboutWork />
    </main>
  );
}
