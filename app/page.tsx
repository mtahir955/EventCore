import { Header } from "@/components/mainheader";
import { HeroSection } from "@/components/hero-section";
import { EventsSection } from "@/components/events-section";
import { CTASection } from "@/components/cta-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/mainfooter";
import { ThemeProvider } from "next-themes";

export default function HomePage() {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="min-h-screen">
        <Header />
        <HeroSection />
        <EventsSection />
        <CTASection />
        <ContactSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
