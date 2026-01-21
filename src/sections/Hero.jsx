import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown, Github, Linkedin, Download } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const SKILLS = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Python",
  "pandas",
  "Machine Learning",
  "REST APIs",
  "Data Validation",
  "Data Analysis",
  "SQL",
  "Git",
  "GitHub",
  "Vercel",
  "Tailwind CSS",
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
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
              src="/hero-bg.jpg"
              alt="Hero background"
              className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="space-y-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Junior Data Analyst • Full Stack Developer
            </span>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Turning <span className="text-primary">data</span>
                <br />
                into reliable
                <br />
                <span className="font-serif italic font-normal text-white">
                software solutions.
              </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg">
                Hi, I am{" "}
                <span className="text-white font-medium">
                Adakole Jumbo-Ochigbo
              </span>{" "}
                — a Computer Information Systems student with experience in data
                validation, automation, and full stack web development.
              </p>

              {/* CTAs */}
              <div className="flex gap-4 flex-wrap">
                <Button size="lg">
                  <a href="#contact" className="inline-flex items-center gap-2">
                    Contact Me <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>

                <AnimatedBorderButton>
                  <a
                      href="/projects/ADAKOLE%20BC%20Data%20analyst%20resume.pdf"
                      download="Adakole_Jumbo-Ochigbo_Resume.pdf"
                      className="inline-flex items-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    Download Resume
                  </a>
                </AnimatedBorderButton>
              </div>

              {/* Socials */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">Connect:</span>
                {SOCIALS.map((s) => (
                    <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                    >
                      <s.icon className="w-5 h-5" />
                    </a>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="relative">
              <div className="relative max-w-md mx-auto glass rounded-3xl p-2 glow-border">
                <img
                    src="/profile-photo.jpg"
                    alt="Adakole Jumbo-Ochigbo"
                    className="w-full aspect-[4/5] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-20">
            <p className="text-sm text-muted-foreground mb-6 text-center">
              Tools and technologies I work with
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {SKILLS.map((skill) => (
                  <span
                      key={skill}
                      className="text-muted-foreground/70 hover:text-muted-foreground transition-colors"
                  >
                {skill}
              </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <a
              href="#about"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </div>
      </section>
  );
};
