import { LanguageProvider } from "@/components/LanguageProvider";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Header } from "@/sections/Header"
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";

export default function Home() {
  return (
    <LanguageProvider>
      <div>
        <Header />
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </div>
    </LanguageProvider>
  );
}
