import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
        "Adakole is extremely detail-oriented. He validates data carefully, follows quality guidelines closely, and consistently delivers accurate work on time.",
    author: "Team Lead",
    role: "Data Quality & Analytics",
    avatar: "/testimonials/avatar1.jpg", // optional: replace later
  },
  {
    quote:
        "He communicates clearly and makes collaboration easy. When requirements change, Adakole adapts quickly and documents what was updated so the team stays aligned.",
    author: "Project Collaborator",
    role: "Software Development",
    avatar: "/testimonials/avatar2.jpg", // optional: replace later
  },
  {
    quote:
        "Adakole contributed to automation and workflow improvements that reduced repetitive tasks. His approach is practical and focused on measurable impact.",
    author: "Supervisor",
    role: "Operations & Automation",
    avatar: "/testimonials/avatar3.jpg", // optional: replace later
  },
  {
    quote:
        "Strong problem-solver with a growth mindset. He asks the right questions, learns fast, and produces work that is clean, reliable, and easy to maintain.",
    author: "Mentor",
    role: "Engineering",
    avatar: "/testimonials/avatar4.jpg", // optional: replace later
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
      <section id="testimonials" className="py-32 relative overflow-hidden">
        <div
            className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        />

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Testimonials
          </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
              Feedback that reflects{" "}
              <span className="font-serif italic font-normal text-white">
              how I work.
            </span>
            </h2>

            <p className="text-muted-foreground animate-fade-in animation-delay-200">
              Short references focused on accuracy, collaboration, and building reliable solutions.
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Main Testimonial */}
              <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
                <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Quote className="w-6 h-6 text-primary-foreground" />
                </div>

                <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                  "{testimonials[activeIdx].quote}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <img
                      src={testimonials[activeIdx].avatar}
                      alt={testimonials[activeIdx].author}
                      className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                      onError={(e) => {
                        e.currentTarget.src = "/profile-photo.jpg";
                      }}
                  />
                  <div>
                    <div className="font-semibold">
                      {testimonials[activeIdx].author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[activeIdx].role}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                    className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                    onClick={previous}
                    aria-label="Previous testimonial"
                >
                  <ChevronLeft />
                </button>

                <div className="flex gap-2">
                  {testimonials.map((_, idx) => (
                      <button
                          key={idx}
                          onClick={() => setActiveIdx(idx)}
                          aria-label={`Go to testimonial ${idx + 1}`}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              idx === activeIdx
                                  ? "w-8 bg-primary"
                                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                          }`}
                      />
                  ))}
                </div>

                <button
                    onClick={next}
                    className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                    aria-label="Next testimonial"
                >
                  <ChevronRight />
                </button>
              </div>

              {/* Optional note */}
              <p className="text-xs text-muted-foreground text-center mt-6">
                Tip: Replace the names/roles with real references when available, or keep them anonymous if preferred.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
};
