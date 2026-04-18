import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Github, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { base44 } from "@/api/base44Client";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await base44.integrations.Core.SendEmail({
      to: "captainpandamonkey5@gmail.com",
      subject: `Portfolio Contact: ${form.name}`,
      body: `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    });
    setSending(false);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  const socials = [
    {
      label: "GitHub",
      icon: Github,
      href: "https://github.com/CaptainPandamonkey5",
    },
  ];

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-10 flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-heading text-3xl font-bold">Get in Touch</h2>
          </div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-5">
          {/* Form */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="md:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card border-border/50 space-y-5 rounded-2xl border p-8 shadow-sm"
            >
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, email: e.target.value }))
                  }
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="What would you like to say?"
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  className="resize-none rounded-xl"
                />
              </div>
              <Button
                type="submit"
                className="font-heading w-full gap-2 rounded-xl font-semibold"
                disabled={sending || sent}
              >
                {sending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : sent ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" /> Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-6 md:col-span-2"
          >
            <div className="bg-card border-border/50 rounded-2xl border p-6 shadow-sm">
              <h3 className="font-heading mb-4 text-lg font-semibold">
                Connect
              </h3>
              <div className="space-y-3">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:bg-muted group flex items-center gap-3 rounded-xl p-3 transition-colors"
                    >
                      <Icon className="text-muted-foreground h-5 w-5 transition-colors group-hover:text-primary" />
                      <span className="text-sm font-medium">{s.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-card border-border/50 rounded-2xl border p-6 shadow-sm">
              <h3 className="font-heading mb-2 text-lg font-semibold">
                Location
              </h3>
              <p className="text-muted-foreground text-sm">
                Based in Australia 🇦🇺
              </p>
              <p className="text-muted-foreground mt-1 text-sm">
                Open to remote opportunities
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
