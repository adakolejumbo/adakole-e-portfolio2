const experiences = [
  {
    period: "Aug 2025 — Present",
    role: "Online Data Analyst",
    company: "TELUS International (Remote)",
    description:
        "Analyze and validate large datasets for accuracy, relevance, and risk. Maintain strong quality standards while delivering consistently in a metrics-driven environment.",
    achievements: [
      "Validated 300–500+ records weekly, ensuring accuracy, consistency, and compliance.",
      "Achieved 95–98% accuracy in data annotation and classification to support improved AI outputs.",
      "Maintained 100% on-time delivery with structured task and dataset tracking.",
      "Provided weekly feedback reports on data quality issues and process improvements.",
    ],
    technologies: ["Data Validation", "Quality Assurance", "Research", "Reporting"],
    current: true,
  },
  {
    period: "May 2023 — Present",
    role: "Full Stack Web Developer",
    company: "Boleaum Inc. (Calgary, AB)",
    description:
        "Contribute to full stack development for internal tools and client-facing applications in a consulting environment. Support backend integrations and cloud deployments with a focus on maintainability and usability.",
    achievements: [
      "Built and enhanced responsive UI features using HTML, CSS, JavaScript, and modern frontend frameworks.",
      "Developed backend functionality using RESTful APIs, server-side logic, and database integrations.",
      "Supported deployments and cloud integrations across AWS, Azure, and GCP.",
      "Collaborated on requirements clarification, testing, debugging, and documentation to reduce rework.",
    ],
    technologies: ["JavaScript", "HTML/CSS", "REST APIs", "Databases", "AWS/Azure/GCP"],
    current: true,
  },
  {
    period: "May 2024 — Aug 2024",
    role: "Technical Intern",
    company: "Unilogik Systems Inc. (Vancouver, BC)",
    description:
        "Supported CRM automation and reporting by building HubSpot integrations and streamlining operational workflows with automation.",
    achievements: [
      "Built HubSpot CRM integrations to automate data flows for reporting and business insights.",
      "Automated operational tasks using Ansible, reducing manual effort by ~35%.",
      "Developed workflows that reduced processing time and follow-ups by ~25%.",
      "Tested and monitored integrations to identify issues, reducing CRM errors by ~20%.",
    ],
    technologies: ["HubSpot", "API Integrations", "Ansible", "Data Workflows"],
    current: false,
  },
];

export const Experience = () => {
  return (
      <section id="experience" className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Career Journey
          </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
              Experience that{" "}
              <span className="font-serif italic font-normal text-white">
              shows measurable results.
            </span>
            </h2>

            <p className="text-muted-foreground animate-fade-in animation-delay-200">
              Roles focused on data quality, reporting, automation, and building
              reliable software—from consulting environments to metrics-driven analytics work.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

            <div className="space-y-12">
              {experiences.map((exp, idx) => (
                  <div
                      key={idx}
                      className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                      style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                      {exp.current && (
                          <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                      )}
                    </div>

                    {/* Content */}
                    <div
                        className={`pl-8 md:pl-0 ${
                            idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"
                        }`}
                    >
                      <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                        <span className="text-sm text-primary font-medium">{exp.period}</span>
                        <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                        <p className="text-muted-foreground">{exp.company}</p>

                        <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>

                        {/* Achievements */}
                        <ul
                            className={`mt-4 space-y-2 text-sm text-muted-foreground ${
                                idx % 2 === 0 ? "md:text-right" : ""
                            }`}
                        >
                          {exp.achievements.map((a, aIdx) => (
                              <li key={aIdx} className="leading-relaxed">
                                {a}
                              </li>
                          ))}
                        </ul>

                        <div
                            className={`flex flex-wrap gap-2 mt-5 ${
                                idx % 2 === 0 ? "md:justify-end" : ""
                            }`}
                        >
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
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};
