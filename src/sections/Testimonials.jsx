import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
        "Adakole is thorough with account and access issues. He follows verification policy closely and documents every step, which makes recurring tickets easy to trace.",
    author: "Team Lead",
    role: "Boleaum Inc.",
    avatar: "/testimonials/avatar1.jpg", // optional: replace later
  },
  {
    quote:
        "He explains technical problems in plain language and stays calm under pressure. Customers leave conversations with him understanding exactly what happened.",
    author: "Supervisor",
    role: "Marshalls",
    avatar: "/testimonials/avatar2.jpg", // optional: replace later
  },
  {
    quote:
        "Adakole picked up our stack quickly and shipped a working voice assistant end to end in six weeks, including fixes for bugs that weren't obvious to catch.",
    author: "Program Lead",
    role: "SpaceBeacon Foundation",
    avatar: "/testimonials/avatar3.jpg", // optional: replace later
  },
  {
    quote:
        "Strong problem-solver with a growth mindset. He asks the right questions, learns fast, and produces work that is clean, reliable, and easy to maintain.",
    author: "Faculty Supervisor",
    role: "University of the Fraser Valley",
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
      <section id="testimonials" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight animate-fade-in">
              How I work
            </h2>

            <p className="text-muted-foreground mt-4 animate-fade-in animation-delay-100">
              Short references focused on reliability, communication, and follow-through.
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
