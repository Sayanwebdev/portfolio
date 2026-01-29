import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ExperienceSection,
  PortfolioSection,
  CertificationsSection,
  AcademicsSection,
  HobbiesSection,
  ContactSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <PortfolioSection />
        <CertificationsSection />
        <AcademicsSection />
        <HobbiesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
