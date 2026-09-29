import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact Sales & Engineering | VoltPulse",
  description:
    "Connect with our IoT energy systems engineers. Schedule an on-site facility power audit, request hardware telemetry specifications, or discuss enterprise microgrid pilots.",
  openGraph: {
    title: "Contact Sales & Engineering | VoltPulse",
    description:
      "Connect with our IoT energy systems engineers. Schedule an on-site facility power audit, request hardware telemetry specifications, or discuss enterprise microgrid pilots.",
    url: "",
    siteName: "VoltPulse",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-primary/20 selection:text-primary relative overflow-x-hidden">
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10 flex flex-col gap-12 sm:gap-16">
        {/* row 1: page heading and intro */}
        <div className="flex flex-col items-start max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-4">
            Connect With Our <br className="hidden sm:block" />
            <span className="text-primary">Energy Systems</span> Engineers
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Whether you are evaluating commercial sub-metering hardware, looking
            to automate peak tariff load shedding, or deploying localized microgrids,
            our specialized systems engineering team is ready to assist.
          </p>
        </div>

        {/* row 2: contact info and form grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* column 1: direct contact channels and response sla */}
          <div className="lg:col-span-5 w-full order-2 lg:order-1">
            <ContactInfo />
          </div>
          {/* column 2: interactive contact form */}
          <div className="lg:col-span-7 w-full order-1 lg:order-2">
            <ContactForm />
          </div>
        </section>
      </main>
    </div>
  );
}