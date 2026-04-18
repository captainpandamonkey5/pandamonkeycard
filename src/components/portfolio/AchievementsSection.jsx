import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const achievements = [
  {
    year: "2024",
    emoji: "💼",
    title: "First Dev Role",
    description:
      "Landed my first Junior Web Developer position at Virtual Graffiti Australia. Building real-world web solutions every day.",
    color: "from-amber-500/20 to-orange-500/10",
    accent: "border-amber-400/50",
  },
  {
    year: "2024",
    emoji: "🎓",
    title: "Graduated University",
    description:
      "Completed my Bachelor's in Mathematics & Computer Science. Survived exams, algorithms, and countless coffee-fuelled coding sessions.",
    color: "from-blue-500/20 to-indigo-500/10",
    accent: "border-blue-400/50",
  },
  {
    year: "2023",
    emoji: "🤖",
    title: "Discord Bot Developer",
    description:
      "Built and deployed multiple Discord bots for The High Exchange community. Discovered a love for automation and backend scripting.",
    color: "from-violet-500/20 to-purple-500/10",
    accent: "border-violet-400/50",
  },
  {
    year: "2023",
    emoji: "🛡️",
    title: "Community Moderator",
    description:
      "Moderated The High Exchange Discord server. Learned that managing people online is harder than debugging code.",
    color: "from-green-500/20 to-emerald-500/10",
    accent: "border-green-400/50",
  },
  {
    year: "2022",
    emoji: "⚡",
    title: "Started Web Development",
    description:
      "Wrote my first lines of HTML and CSS. Spent an embarrassing amount of time centering a div — we don't talk about that.",
    color: "from-rose-500/20 to-pink-500/10",
    accent: "border-rose-400/50",
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2">
              <Trophy className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-heading text-3xl font-bold">Milestones</h2>
            <span className="text-2xl">🏆</span>
          </div>
          <p className="text-muted-foreground mb-12 ml-1 text-sm">
            The journey so far — wins, lessons, and a few laughs
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="via-border absolute bottom-2 left-[22px] top-2 hidden w-0.5 bg-gradient-to-b from-primary/50 to-transparent sm:block" />

          <div className="space-y-8">
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="flex gap-6">
                  {/* Timeline dot */}
                  <div className="hidden shrink-0 flex-col items-center sm:flex">
                    <div className="bg-card z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 border-primary/30 text-xl shadow-sm">
                      {a.emoji}
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`flex-1 rounded-2xl bg-gradient-to-br ${a.color} border ${a.accent} group p-6 transition-all duration-300 hover:shadow-md`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <div className="mb-1 flex items-center gap-2">
                          <span className="text-xl sm:hidden">{a.emoji}</span>
                          <h3 className="font-heading text-lg font-semibold transition-colors group-hover:text-primary">
                            {a.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {a.description}
                        </p>
                      </div>
                      <span className="text-muted-foreground bg-background/60 border-border/50 shrink-0 rounded-full border px-3 py-1 font-mono text-xs font-bold">
                        {a.year}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
