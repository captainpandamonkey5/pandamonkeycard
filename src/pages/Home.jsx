import Navbar from "../components/portfolio/Navbar";
import HeroSection from "../components/portfolio/HeroSection";
import AchievementsSection from "../components/portfolio/AchievementsSection";
import AffiliateSection from "../components/portfolio/AffiliateSection";
import AboutSection from "../components/portfolio/AboutSection";
import ExperienceSection from "../components/portfolio/ExperienceSection";
import SkillsSection from "../components/portfolio/SkillsSection";
import ProjectsSection from "../components/portfolio/ProjectsSection";
import ContactSection from "../components/portfolio/ContactSection";
import Footer from "../components/portfolio/Footer";

export default function Home() {
  return (
    <div className="bg-background font-body min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <AchievementsSection />
      <ProjectsSection />
      <AffiliateSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
