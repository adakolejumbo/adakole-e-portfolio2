import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown, Github, Linkedin, Download } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const SKILLS = [
  "Microsoft 365",
  "Active Directory",
  "Azure AD (Entra ID)",
  "Windows Server",
  "Zendesk / Ticketing",
  "VPN · DHCP · DNS",
  "Firewalls",
  "Wireshark",
  "PowerShell",
  "Python",
  "React",
  "SQL",
  "AWS",
  "Docker",
  "Git",
];

const SOCIALS = [
  {
    icon: Github,
    href: "https://github.com/adakolejumbo",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/adakole-jumbo-ochigbo-66a077267/",
    label: "LinkedIn",
  },
];

export const Hero = () => {
  return (
      <section className="relative min-h-screen flex items-center">
        <div className="container mx-auto px-6 pt-32 pb-20">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
            {/* Left */}
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground animate-fade-in">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                open to IT &amp; technical support roles
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] animate-fade-in animation-delay-100">
                I troubleshoot systems, secure access, and ship software.
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I&apos;m{" "}
                <span className="text-foreground font-medium">
                  Adakole Jumbo-Ochigbo
                </span>{" "}
                — an IT Support Technician in Abbotsford, BC, working across
                Microsoft 365, Active Directory/Entra ID, networking, and
                security — CompTIA A+ and Security+ certified.
              </p>

              {/* CTAs */}
              <div className="flex gap-4 flex-wrap animate-fade-in animation-delay-300">
                <Button size="lg">
                  <a href="#contact" className="inline-flex items-center gap-2">
                    Contact Me <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>

                <AnimatedBorderButton>
                  <a
                      href="/projects/Adakole_Jumbo-Ochigbo_Resume.pdf"
                      download="Adakole_Jumbo-Ochigbo_Resume.pdf"
                      className="inline-flex items-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    Download Resume
                  </a>
                </AnimatedBorderButton>
              </div>

              {/* Socials */}
              <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                <span className="text-sm text-muted-foreground">Connect:</span>
                {SOCIALS.map((s) => (
                    <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full border border-border hover:border-primary/50 hover:text-primary transition-colors"
                    >
                      <s.icon className="w-5 h-5" />
                    </a>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="relative animate-fade-in animation-delay-300">
              <div className="relative max-w-sm mx-auto rounded-2xl border border-border overflow-hidden">
                <img
                    src="/profile-photo.jpg"
                    alt="Adakole Jumbo-Ochigbo"
                    className="w-full aspect-[4/5] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-24 pt-10 border-t border-border animate-fade-in animation-delay-500">
            <p className="font-mono text-xs text-muted-foreground mb-6">
              tools &amp; systems
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {SKILLS.map((skill) => (
                  <span
                      key={skill}
                      className="text-muted-foreground/80 hover:text-foreground transition-colors text-sm"
                  >
                {skill}
              </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
          <a
              href="#about"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary"
          >
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </section>
  );
};
