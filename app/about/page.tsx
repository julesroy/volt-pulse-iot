import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import ValuesSection from "@/components/about/ValuesSection";
import MilestonesTimeline from "@/components/about/MilestonesTimeline";
import TeamSection from "@/components/about/TeamSection";
import AboutCtaSection from "@/components/about/AboutCtaSection";

export const metadata: Metadata = {
  title: "About Us | VoltPulse",
  description:
    "Learn about VoltPulse's mission, engineering leadership, and operational milestones in industrial IoT energy monitoring, sub-second telemetry, and autonomous microgrids.",
  openGraph: {
    title: "About Us | VoltPulse",
    description:
      "Learn about VoltPulse's mission, engineering leadership, and operational milestones in industrial IoT energy monitoring, sub-second telemetry, and autonomous microgrids.",
    url: "",
    siteName: "VoltPulse",
    images: ["/dashboard.webp"],
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-primary/20 selection:text-primary relative overflow-x-hidden">
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10 flex flex-col gap-16 sm:gap-20">
        {/* row 1: about hero and mission vision section */}
        <AboutHero />

        {/* row 2: core operational values section */}
        <ValuesSection />

        {/* row 3: operational milestones timeline */}
        <MilestonesTimeline />

        {/* row 4: leadership and engineering team section */}
        <TeamSection />

        {/* row 5: enterprise pilot call to action */}
        <AboutCtaSection />
      </main>
    </div>
  );
}