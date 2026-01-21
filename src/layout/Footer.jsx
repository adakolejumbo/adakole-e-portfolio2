import { Github, Linkedin, Heart } from "lucide-react";

const socialLinks = [
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

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold">
                Adakole<span className="text-primary">.</span>
              </h3>
              <p className="text-sm text-muted-foreground">
                © {year} Adakole Jumbo-Ochigbo
              </p>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((s) => (
                  <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary"
                  >
                    <s.icon className="w-5 h-5" />
                  </a>
              ))}
            </div>
          </div>

          <p className="mt-6 text-xs text-center text-muted-foreground flex items-center justify-center gap-1">
            Built with care <Heart className="w-3 h-3 text-red-500" /> using React & Tailwind
          </p>
        </div>
      </footer>
  );
};
