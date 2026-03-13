import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import StatsSection from "@/components/sections/StatsSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main>
      <HeroGeometric
        badge="Web Design Agency · Uxbridge, London"
        title1="Websites That Work"
        title2="As Hard As You Do"
      />
      <ServicesSection />
      <ProcessSection />
      <StatsSection />
      <CTASection />
    </main>
  );
}
