import Sidebar from "@/components/Sidebar";
import HeaderSection from "@/components/HeaderSection";
import About from "@/components/About";
import AboutMeSection from "@/components/About";
import ResumeSection from "@/components/Resume";
import ServicesSection from "@/components/Services";
import PortfolioSection from "@/components/Portfolio";

export default function Home() {
  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="flex">
      <Sidebar sections={sections} />

      <main className="flex-1 mt-5 lg:px-5">
        <HeaderSection />
        <AboutMeSection></AboutMeSection>
        <ResumeSection></ResumeSection>
        <ServicesSection></ServicesSection>
        <PortfolioSection></PortfolioSection>
        
        
      </main>
    </div>
  );
}
