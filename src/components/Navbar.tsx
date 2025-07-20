
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className={`navbar ${isScrolled ? "shadow-md" : ""}`}>
      <div className="container max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-gradient">SGS</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-1">
          <button onClick={() => scrollToSection("about")} className="navbar-link">
            About
          </button>
          <button onClick={() => scrollToSection("education")} className="navbar-link">
            Education
          </button>
          <button onClick={() => scrollToSection("skills")} className="navbar-link">
            Skills
          </button>
          <button onClick={() => scrollToSection("experience")} className="navbar-link">
            Experience
          </button>
          <button onClick={() => scrollToSection("projects")} className="navbar-link">
            Projects
          </button>
          <button onClick={() => scrollToSection("publications")} className="navbar-link">
            Publications
          </button>
          <button onClick={() => scrollToSection("awards")} className="navbar-link">
            Awards
          </button>
          <button onClick={() => scrollToSection("contact")} className="navbar-link">
            Contact
          </button>
        </div>

        <div className="flex items-center space-x-2">
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-secondary/50 text-secondary-foreground hover:bg-secondary/80 transition-colors"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border py-4 px-6 flex flex-col space-y-4 animate-fade-in">
          <button onClick={() => scrollToSection("about")} className="text-left py-2">
            About
          </button>
          <button onClick={() => scrollToSection("education")} className="text-left py-2">
            Education
          </button>
          <button onClick={() => scrollToSection("skills")} className="text-left py-2">
            Skills
          </button>
          <button onClick={() => scrollToSection("experience")} className="text-left py-2">
            Experience
          </button>
          <button onClick={() => scrollToSection("projects")} className="text-left py-2">
            Projects
          </button>
          <button onClick={() => scrollToSection("publications")} className="text-left py-2">
            Publications
          </button>
          <button onClick={() => scrollToSection("awards")} className="text-left py-2">
            Awards
          </button>
          <button onClick={() => scrollToSection("contact")} className="text-left py-2">
            Contact
          </button>
          
          {/* Theme Toggle - Mobile */}
          <button 
            onClick={toggleTheme}
            className="text-left py-2 flex items-center gap-2"
          >
            {theme === "dark" ? (
              <>
                <Sun size={16} /> Light Mode
              </>
            ) : (
              <>
                <Moon size={16} /> Dark Mode
              </>
            )}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
