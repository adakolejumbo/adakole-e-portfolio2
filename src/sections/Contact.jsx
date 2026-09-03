import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Github,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "jumboadakole@gmail.com",
    href: "mailto:jumboadakole@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "778-868-4606",
    href: "tel:+17788684606",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Abbotsford, BC, Canada",
    href: "#",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/adakolejumbo",
    href: "https://github.com/adakolejumbo",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/adakole-jumbo-ochigbo-66a077267",
    href: "https://www.linkedin.com/in/adakole-jumbo-ochigbo-66a077267/",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // "success" or "error"
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
            "EmailJS configuration is missing. Please check your environment variables."
        );
      }

      await emailjs.send(
          serviceId,
          templateId,
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
          },
          publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully. I will get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);

      setSubmitStatus({
        type: "error",
        message:
            (err && err.text) ||
            (err && err.message) ||
            "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <section id="contact" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight animate-fade-in">
              Let&apos;s connect
            </h2>

            <p className="text-muted-foreground mt-4 animate-fade-in animation-delay-100">
              If you&apos;re hiring for IT support, systems administration, or
              full stack roles — or want to talk through a project — send a
              message. I&apos;m happy to share my work.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                      id="name"
                      type="text"
                      required
                      placeholder="Your name..."
                      value={formData.name}
                      onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                </div>

                <div>
                  <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                      id="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                </div>

                <div>
                  <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="What would you like to work on?"
                      className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  />
                </div>

                <Button className="w-full" type="submit" size="lg" disabled={isLoading}>
                  {isLoading ? (
                      <>Sending...</>
                  ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                  )}
                </Button>

                {submitStatus.type && (
                    <div
                        className={`flex items-center gap-3 p-4 rounded-xl ${
                            submitStatus.type === "success"
                                ? "bg-green-500/10 border border-green-500/20 text-green-400"
                                : "bg-red-500/10 border border-red-500/20 text-red-400"
                        }`}
                    >
                      {submitStatus.type === "success" ? (
                          <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      ) : (
                          <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      )}
                      <p className="text-sm">{submitStatus.message}</p>
                    </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in animation-delay-400">
              <div className="glass rounded-3xl p-8">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

                <div className="space-y-4">
                  {contactInfo.map((item, i) => {
                    const isHttp =
                        typeof item.href === "string" && item.href.startsWith("http");

                    return (
                        <a
                            key={i}
                            href={item.href}
                            target={isHttp ? "_blank" : undefined}
                            rel={isHttp ? "noreferrer" : undefined}
                            className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                        >
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <item.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">
                              {item.label}
                            </div>
                            <div className="font-medium">{item.value}</div>
                          </div>
                        </a>
                    );
                  })}
                </div>
              </div>

              {/* Availability Card */}
              <div className="glass rounded-3xl p-8 border border-primary/30">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-medium">Open to Opportunities</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  I am currently open to IT support, systems administration,
                  and full stack development opportunities, including
                  internships and co-op roles. If your team needs help keeping
                  systems running or building software, I would love to
                  connect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};
