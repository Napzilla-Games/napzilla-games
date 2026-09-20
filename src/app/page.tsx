import InkReveal from "@/components/effects/InkReveal";
import Hero from "@/components/sections/hero/index";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <InkReveal>
        <Hero />
      </InkReveal>
    </main>
  );
}
