import { Navbar } from "@/components/cognispike/Navbar";
import { Hero } from "@/components/cognispike/Hero";
import { PainPoints } from "@/components/cognispike/PainPoints";
import { Services } from "@/components/cognispike/Services";
import { Process } from "@/components/cognispike/Process";
import { WhyUs } from "@/components/cognispike/WhyUs";
import { Results } from "@/components/cognispike/Results";
import { Industries } from "@/components/cognispike/Industries";
import { CTABanner } from "@/components/cognispike/CTABanner";
import { FAQ } from "@/components/cognispike/FAQ";
import { Footer } from "@/components/cognispike/Footer";

export default function HomePage() {
  return (
    <main data-testid="homepage" className="relative min-h-screen text-white">
      <Navbar />
      <Hero />
      <PainPoints />
      <Services />
      <Process />
      <WhyUs />
      <Results />
      <Industries />
      <CTABanner />
      <FAQ />
      <Footer />
    </main>
  );
}
