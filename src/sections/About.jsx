import {
  BarChart3,
  Database,
  Workflow,
  Users,
} from "lucide-react";

const highlights = [
  {
    icon: Database,
    title: "Data Quality & Validation",
    description:
        "Validate and track large datasets (300–500+ records/week) while maintaining strong consistency and compliance.",
  },
  {
    icon: BarChart3,
    title: "Reporting & Insights",
    description:
        "Turn raw data into clear business insights using Excel (Pivot Tables, Lookups), Power BI fundamentals, and structured reporting.",
  },
  {
    icon: Workflow,
    title: "Automation & Integrations",
    description:
        "Built CRM automations and API integrations, reducing manual effort by ~35% and cutting processing time by ~25%.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
        "Work closely with stakeholders and teams to clarify requirements, document processes, and reduce rework.",
  },
];

export const About = () => {
  return (
      <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                Building reliable products,
                <span className="font-serif italic font-normal text-white">
                {" "}
                  backed by clean data.
              </span>
              </h2>

              <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                <p>
                  I’m Adakole Jumbo-Ochigbo — a detail-oriented Junior Analyst and
                  Full Stack Web Developer studying Computer Information Systems at
                  the University of the Fraser Valley. I enjoy solving problems at
                  the intersection of software, data, and process improvement.
                </p>

                <p>
                  Recently, I’ve supported data validation and research workflows
                  in a metrics-driven environment, maintaining strong accuracy in
                  annotation and classification. I also have hands-on experience
                  with CRM data and automation (HubSpot + APIs), where I helped
                  improve data reliability and reduce manual work through
                  scripting and automation.
                </p>

                <p>
                  Outside of work, I build projects like a React crypto market
                  dashboard that consumes external APIs and visualizes real-time
                  data. I’m always focused on clarity, usability, and making
                  systems easier for people to trust and use.
                </p>
              </div>

              <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                <p className="text-lg font-medium italic text-foreground">
                  “I like building tools and workflows that are simple to use,
                  easy to maintain, and grounded in accurate data — so teams can
                  make confident decisions.”
                </p>
              </div>
            </div>

            {/* Right Column - Highlights */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, idx) => (
                  <div
                      key={idx}
                      className="glass p-6 rounded-2xl animate-fade-in"
                      style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};
