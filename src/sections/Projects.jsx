import {
  ArrowUpRight,
  Github,
  Ticket,
  Server,
  Mic,
  Dumbbell,
  KeyRound,
  LineChart,
} from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Adakole Ticketing System (MSP Service Desk)",
    description:
        "A full-stack IT service desk modeled on Zendesk and ServiceNow. Consolidates email, chat, web, social, and phone requests into one queue, with rule-based routing plus optional Claude AI triage, SLA tracking that pauses while awaiting the customer, macros, a knowledge base with ticket deflection, and role-based dashboards.",
    icon: Ticket,
    tags: ["React", "Node.js", "PostgreSQL", "Claude API", "SLA Tracking", "Vercel"],
    link: "https://adakole-ticketing-system.vercel.app",
    github: "https://github.com/adakolejumbo/adakole-ticketing-system",
  },
  {
    title: "Active Directory Home Lab",
    description:
        "A self-contained AD lab in VirtualBox: a Windows Server Domain Controller hosting a new forest with DNS and DHCP, custom OUs (IT, HR, Workstations), a domain-joined client VM, and Group Policy Objects enforcing password policy, security settings, and mapped drives.",
    icon: Server,
    tags: ["Windows Server", "Active Directory", "Group Policy", "DNS / DHCP", "PowerShell", "VirtualBox"],
  },
  {
    title: "Food Bank Helper",
    description:
        "A voice-first, 7-language support assistant for the Archway Food Bank, built during the SpaceBeacon Foundation internship. Routes questions to the Claude API through a Node.js layer, escalates to a one-tap call flow, and fixes cross-browser voice, iOS autoplay, and routing bugs.",
    icon: Mic,
    tags: ["React", "Node.js", "Anthropic API", "Supabase", "Voice UI", "Vercel"],
    link: "https://foodbank-assistant-claude-c92g.vercel.app",
    github: "https://github.com/adakolejumbo/adakole-foodbank-final",
  },
  {
    title: "Fitness Tracker Web Application",
    description:
        "A full-stack fitness tracking app with a React front end and a Strapi (Node.js) backend, featuring user authentication, role-based access control, and documented RESTful APIs with structured permission levels.",
    image: "/projects/project3.png",
    icon: Dumbbell,
    tags: ["React", "Strapi", "Node.js", "REST API", "Authentication", "Vercel"],
    link: "https://fitness-tracker-client-rho.vercel.app",
    github: "https://github.com/adakolejumbo/Fitness_Tracker",
  },
  {
    title: "Secure Client-Server Communication",
    description:
        "A client-server key exchange for talking safely over an unsecure connection: asymmetric encryption for the handshake, HKDF-derived symmetric session keys, and documented man-in-the-middle risks with Ed25519 and CA-based mitigations.",
    icon: KeyRound,
    tags: ["Python", "Cryptography", "HKDF", "Public-Key Encryption"],
    github: "https://github.com/ConfirmedToBeACabbage/UnsecureNetworkCommunication",
  },
  {
    title: "Crypto Dashboard",
    description:
        "A responsive, dark-themed dashboard showing real-time market data from the CoinGecko API, with interactive Recharts price charts, a coin-detail view, multi-page routing, and search/filter — deployed on Vercel.",
    image: "/projects/project1.png",
    icon: LineChart,
    tags: ["React", "Vite", "React Router", "CoinGecko API", "Recharts", "Vercel"],
    link: "https://adakole-crypto-project.vercel.app",
    github: "https://github.com/adakolejumbo/adakole-crypto-project",
  },
];

export const Projects = () => {
  return (
      <section id="projects" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight animate-fade-in">
              Things I&apos;ve built
            </h2>

            <p className="text-muted-foreground mt-4 animate-fade-in animation-delay-100">
              Service desks, directory labs, secure networking, and full-stack
              apps — the same troubleshooting instincts, applied to software.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
                <div
                    key={idx}
                    className="group glass rounded-2xl overflow-hidden animate-fade-in"
                    style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-video">
                    {project.image ? (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-surface transition-transform duration-700 group-hover:scale-110">
                          <project.icon className="w-16 h-16 text-primary/70" />
                        </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                    {/* Overlay Links */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.link && (
                          <a
                              href={project.link}
                              target="_blank"
                              rel="noreferrer"
                              className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                              aria-label={`Open ${project.title}`}
                          >
                            <ArrowUpRight className="w-5 h-5" />
                          </a>
                      )}

                      {project.github && (
                          <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                              aria-label={`View ${project.title} on GitHub`}
                          >
                            <Github className="w-5 h-5" />
                          </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <project.icon className="w-5 h-5 flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>

                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIdx) => (
                          <span
                              key={tagIdx}
                              className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                          >
                      {tag}
                    </span>
                      ))}
                    </div>

                    {(project.link || project.github) && (
                        <div className="flex gap-4 pt-2 text-sm">
                          {project.link && (
                              <a
                                  href={project.link}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                              >
                                Live Demo <ArrowUpRight className="w-4 h-4" />
                              </a>
                          )}
                          {project.github && (
                              <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                              >
                                GitHub <Github className="w-4 h-4" />
                              </a>
                          )}
                        </div>
                    )}
                  </div>
                </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12 animate-fade-in animation-delay-500">
            <AnimatedBorderButton>
              <a
                  href="https://github.com/adakolejumbo"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2"
              >
                View All Projects
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </AnimatedBorderButton>
          </div>
        </div>
      </section>
  );
};
