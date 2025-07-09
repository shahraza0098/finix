// src/app/page.tsx
import Header from "../_components/Header";
import Hero from "../_components/HeroSec";
import Features from "../_components/Features";

export default function HomePage() {
  return (
    <main className="relative">
      <Header/>
      <Hero />
      <Features />
    </main>
  );
}
