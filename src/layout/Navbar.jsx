import { Button } from "@/components/Button";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <header
          className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
              isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
          }  z-50`}
      >
        <nav className="container mx-auto px-6 flex items-center justify-between">
          <a
              href="#"
              className="text-xl font-bold tracking-tight hover:text-primary"
          >
            Adakole<span className="text-primary">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
              {navLinks.map((link, index) => (
                  <a
                      href={link.href}
                      key={index}
                      className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
                  >
                    {link.label}
                  </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
                href="https://github.com/adakolejumbo"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full hover:bg-surface text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
            >
              <Github size={18} />
            </a>

            <a
                href="https://www.linkedin.com/in/adakole-jumbo-ochigbo-66a077267/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full hover:bg-surface text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>

            <Button size="sm" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
              className="md:hidden p-2 text-foreground cursor-pointer"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
            <div className="md:hidden glass-strong animate-fade-in">
              <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                {navLinks.map((link, index) => (
                    <a
                        href={link.href}
                        key={index}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-lg text-muted-foreground hover:text-foreground py-2"
                    >
                      {link.label}
                    </a>
                ))}

                <Button onClick={() => setIsMobileMenuOpen(false)} asChild>
                  <a href="#contact">Contact Me</a>
                </Button>

                <div className="flex items-center gap-3 pt-2">
                  <a
                      href="https://github.com/adakolejumbo"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full hover:bg-surface text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>

                  <a
                      href="https://www.linkedin.com/in/adakole-jumbo-ochigbo-66a077267/"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full hover:bg-surface text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
        )}
      </header>
  );
};
