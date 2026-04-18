import { useState } from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const categories = {
  Frontend: [
    { name: "HTML5", level: 90, emoji: "🌐" },
    { name: "CSS3", level: 85, emoji: "🎨" },
    { name: "JavaScript", level: 80, emoji: "⚡" },
    { name: "React", level: 75, emoji: "⚛️" },
    { name: "Vue.js", level: 70, emoji: "💚" },
    { name: "Tailwind", level: 80, emoji: "🎯" },
    { name: "TypeScript", level: 65, emoji: "📘" },
  ],
  Backend: [
    { name: "Node.js", level: 70, emoji: "🟢" },
    { name: "Python", level: 65, emoji: "🐍" },
    { name: "SQL", level: 60, emoji: "🗄️" },
  ],
  "Tools & Other": [
    { name: "Git", level: 80, emoji: "📦" },
    { name: "Discord.js", level: 75, emoji: "🤖" },
  ],
  Mathematics: [
    { name: "Linear Algebra", level: 85, emoji: "📐" },
    { name: "Calculus", level: 80, emoji: "📊" },
    { name: "Statistics", level: 75, emoji: "📈" },
  ],
};

const categoryKeys = Object.keys(categories);

export default function SkillsSection() {
  const [active, setActive] = useState("Frontend");

  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-10 flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2">
              <Code2 className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-heading text-3xl font-bold">
              Technologies & Skills
            </h2>
          </div>
        </motion.div>

        {/* Tech pill cloud */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-wrap gap-3"
        >
          {Object.values(categories)
            .flat()
            .map((s) => (
              <span
                key={s.name}
                className="bg-card border-border/50 inline-flex cursor-default items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-all hover:border-primary/30 hover:bg-primary/5"
              >
                <span>{s.emoji}</span>
                {s.name}
              </span>
            ))}
        </motion.div>

        {/* Category tabs */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categoryKeys.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                active === cat
                  ? "text-primary-foreground bg-primary shadow-lg shadow-primary/25"
                  : "bg-card border-border/50 text-muted-foreground hover:text-foreground border hover:border-primary/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill bars */}
        <div className="space-y-5">
          {categories[active]?.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium">
                  {skill.emoji} {skill.name}
                </span>
                <span className="text-muted-foreground text-xs">
                  {skill.level}%
                </span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
