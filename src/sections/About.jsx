import {
  ShieldCheck,
  Network,
  Code2,
  Users,
  BadgeCheck,
} from "lucide-react";

const certifications = [
  "CompTIA A+",
  "CompTIA Security+",
  "AWS Certified Cloud Practitioner",
  "FoodSafe Level 1",
];

const highlights = [
  {
    icon: ShieldCheck,
    title: "Systems & Identity",
    description:
        "Manage Microsoft 365, Active Directory, and Azure AD (Entra ID) accounts — provisioning, permissions, and password resets under access-control policy.",
  },
  {
    icon: Network,
    title: "Networking & Security",
    description:
        "Diagnose IPv4 traffic with Wireshark and work with firewall rules, port forwarding, and IP whitelisting to keep access controlled and traceable.",
  },
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
        "Build with React, Node.js, and the Anthropic API — from a multilingual voice assistant to dashboards and authenticated web apps.",
  },
  {
    icon: Users,
    title: "Support & Documentation",
    description:
        "Translate technical issues into plain language for non-technical audiences, and document every fix so it doesn't need solving twice.",
  },
];

export const About = () => {
  return (
      <section id="about" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-semibold leading-tight animate-fade-in">
                Support work and software work, from the same instinct: find
                what's broken, fix it properly.
              </h2>

              <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-100">
                <p>
                  I&apos;m Adakole Jumbo-Ochigbo, a Computer Information Systems
                  graduate from the University of the Fraser Valley (GPA 3.66).
                  I work as a Remote Support Technician at Boleaum Inc. —
                  managing Microsoft 365 and Active Directory/Entra ID accounts
                  for 50+ users — while coordinating customer-facing support and
                  in-store security systems as a Sales Coordinator at Marshalls.
                </p>

                <p>
                  This past summer, I joined the SpaceBeacon Foundation's
                  Digital Skills &amp; AI Readiness internship, where I built
                  and deployed Food Bank Helper, a voice-first, 7-language
                  support assistant for the Archway Food Bank, and presented
                  the project's outcomes to a Member of Parliament. Earlier, as
                  a Cybersecurity Lab Assistant at UFV, I used Wireshark to help
                  students troubleshoot IPv4 traffic, firewall rules, and access
                  control.
                </p>

                <p>
                  I&apos;m comfortable with networking fundamentals (VPN, DHCP,
                  DNS, IPv4, firewall configuration) and security best practices,
                  and I&apos;m equally at home resetting an Entra ID account or
                  shipping a React feature.
                </p>
              </div>

              {/* Certifications */}
              <div className="animate-fade-in animation-delay-200">
                <p className="font-mono text-xs text-muted-foreground mb-3">
                  certifications
                </p>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert) => (
                      <span
                          key={cert}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface text-xs text-muted-foreground border border-border/50"
                      >
                        <BadgeCheck className="w-3.5 h-3.5 text-primary" />
                        {cert}
                      </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Highlights */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, idx) => (
                  <div
                      key={idx}
                      className="glass p-6 rounded-xl animate-fade-in"
                      style={{ animationDelay: `${(idx + 1) * 80}ms` }}
                  >
                    <item.icon className="w-5 h-5 text-primary mb-4" />
                    <h3 className="text-base font-semibold mb-2">{item.title}</h3>
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
