import { motion } from "framer-motion";
import { User } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2">
              <User className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-heading text-3xl font-bold">About Me</h2>
          </div>

          <div className="bg-card border-border/50 rounded-2xl border p-8 shadow-sm">
            <p className="text-foreground/80 font-body text-lg leading-relaxed">
              Passionate web developer with a strong foundation in mathematics
              and computer science. I love creating interactive and
              user-friendly web experiences while continuously learning new
              technologies. When I'm not coding, you'll find me gaming,
              connecting with fellow developers, and exploring new tech
              communities.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
