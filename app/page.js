import Sidebar from "@/components/Sidebar";
import HeaderSection from "@/components/HeaderSection";
import About from "@/components/About";

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

      <main className="flex-1 ml-64 px-15 py-5">
        <HeaderSection />
        
        {/* baki section gulo same vhabe banabo */}
      </main>
    </div>
  );
}
