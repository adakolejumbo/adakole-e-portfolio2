const experiences = [
  {
    period: "Jul 2026 — Aug 2026",
    role: "Digital Skills & AI Readiness Intern",
    company: "SpaceBeacon Foundation · Abbotsford, BC",
    description:
        "Six-week program building a voice-first, multilingual support assistant for the Archway Food Bank.",
    achievements: [
      "Built and deployed Food Bank Helper, a voice-first, 7-language support assistant grounded on real organizational data.",
      "Fixed cross-browser voice/session bugs, including a stuck recording timer, iOS autoplay restrictions, and blank-screen routing on refresh.",
      "Collaborated with fellow interns on digital-readiness frameworks for the Fraser Valley region.",
      "Presented internship outcomes directly to a Member of Parliament in non-technical language.",
    ],
    technologies: ["React", "Node.js", "Anthropic API", "Supabase"],
    current: false,
  },
  {
    period: "May 2023 — Present",
    role: "Remote Support Technician (Technical Analyst)",
    company: "Boleaum Inc. · Remote",
    description:
        "Remote technical support for Microsoft 365, Active Directory, and Azure AD (Entra ID) accounts.",
    achievements: [
      "Supported 50+ end users, resolving Microsoft 365 and Entra ID issues at a 90% first-response resolution rate.",
      "Managed account provisioning, password resets, and access permissions under access-control policy.",
      "Reviewed recurring tickets and coordinated fixes with developers and QA, cutting recurring incidents by 25%.",
      "Documented every troubleshooting step, improving resolution efficiency by 30%.",
    ],
    technologies: ["Microsoft 365", "Active Directory", "Azure AD (Entra ID)", "Ticketing"],
    current: true,
  },
  {
    period: "May 2023 — Present",
    role: "Sales Coordinator",
    company: "Marshalls · Abbotsford, BC",
    description:
        "Frontline customer support and in-store security-system operation in a high-volume retail environment.",
    achievements: [
      "Managed customer expectations and explained solutions clearly across a wide range of issues.",
      "Operated in-store alarm panels — arming, disarming, and responding to triggered alerts.",
      "Followed activation, reset, and documentation protocols for reliable alarm-signal transmission.",
      "Trained 5+ new employees on POS systems and support procedures.",
    ],
    technologies: ["Customer Support", "Security Systems", "Training"],
    current: true,
  },
  {
    period: "Sep 2025 — Dec 2025",
    role: "Cybersecurity Lab Assistant",
    company: "University of the Fraser Valley · Abbotsford, BC",
    description:
        "Hands-on troubleshooting support for students in network security coursework.",
    achievements: [
      "Diagnosed system and network issues using Wireshark, focusing on IPv4 traffic and anomaly detection.",
      "Coordinated with faculty to review recurring lab issues and maintain configuration records.",
      "Supported 30+ students with firewall rules, IP whitelisting, and access control concepts.",
    ],
    technologies: ["Wireshark", "IPv4 Networking", "Firewalls"],
    current: false,
  },
];

export const Experience = () => {
  return (
      <section id="experience" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight animate-fade-in">
              Where I&apos;ve worked
            </h2>
            <p className="text-muted-foreground mt-4 animate-fade-in animation-delay-100">
              Support, security, and software — across an internship, a
              part-time analyst role, a retail floor, and a university lab.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative border-l border-border pl-8 space-y-12">
            {experiences.map((exp, idx) => (
                <div
                    key={idx}
                    className="relative animate-fade-in"
                    style={{ animationDelay: `${(idx + 1) * 80}ms` }}
                >
                  <div className="absolute -left-[calc(2rem+4.5px)] top-1.5 w-2 h-2 rounded-full bg-primary ring-4 ring-background" />

                  <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                  <h3 className="text-lg font-semibold mt-1">{exp.role}</h3>
                  <p className="text-muted-foreground text-sm">{exp.company}</p>

                  <p className="text-sm text-muted-foreground mt-3">{exp.description}</p>

                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    {exp.achievements.map((a, aIdx) => (
                        <li key={aIdx} className="leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-border">
                          {a}
                        </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech, techIdx) => (
                        <span
                            key={techIdx}
                            className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                    ))}
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};
