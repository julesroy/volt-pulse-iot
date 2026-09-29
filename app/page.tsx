import HeroSection from "@/components/home/HeroSection";
import ValuePropositionSection from "@/components/home/ValuePropositionSection";
import CapabilitiesSection from "@/components/home/CapabilitiesSection";
import MetricsSection from "@/components/home/MetricsSection";
import PartnersSection from "@/components/home/PartnersSection";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-primary/20 selection:text-primary relative overflow-x-hidden">
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 flex flex-col gap-24 sm:gap-32 relative z-10">
        {/* row 1: hero */}
        <HeroSection />
        {/* row 2: value proposition */}
        <ValuePropositionSection />
        {/* row 3: capabilities */}
        <CapabilitiesSection />
        {/* row 4: metrics */}
        <MetricsSection />
        {/* row 5: partners */}
        <PartnersSection />
        {/* row 6: cta banner */}
        <CtaSection />
      </main>
    </div>
  );
}
