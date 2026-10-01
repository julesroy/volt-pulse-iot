import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VoltPulse",
  description: "VoltPulse is a software-defined energy management platform for industrial and commercial facilities.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative overflow-x-clip">
        <Header />
        {children}
        {/* background ambient glow */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[450px] overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-primary/10 blur-[130px] rounded-full" />
        </div>
        <Footer />
      </body>
    </html>
  );
}
