import { motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  MessageSquare,
  GraduationCap,
  Clock,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const currentRoles = [
  {
    icon: Building2,
    title: "Junior Web Developer",
    company: "Virtual Graffiti Australia",
    description:
      "Building modern web solutions, working with React, Vue.js, and other modern frameworks to deliver exceptional user experiences.",
    status: "current",
  },
  {
    icon: GraduationCap,
    title: "Graduate",
    company: "Mathematics & Computer Science",
    description:
      "Strong analytical foundation with deep understanding of algorithms, data structures, and mathematical problem-solving.",
    status: "current",
  },
];

const formerRoles = [
  {
    icon: MessageSquare,
    title: "Discord Moderator",
    company: "The High Exchange - THX",
    description:
      "Community management & moderation. Managed and moderated a large Discord community, built custom bots, and maintained community guidelines.",
    status: "former",
  },
];

function RoleCard({ role, index, isFaded }) {
  const Icon = role.icon;
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`bg-card border-border/50 group relative rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md ${isFaded ? "opacity-70" : ""}`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`rounded-xl p-3 ${isFaded ? "bg-muted" : "bg-primary/10"} shrink-0`}
        >
          <Icon
            className={`h-5 w-5 ${isFaded ? "text-muted-foreground" : "text-primary"}`}
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex flex-wrap items-center gap-2">
            <h3 className="font-heading text-lg font-semibold">{role.title}</h3>
            {role.status === "current" ? (
              <Badge
                variant="default"
                className="rounded-full border-0 bg-green-500/10 text-xs text-green-600 hover:bg-green-500/10 dark:text-green-400"
              >
                Current
              </Badge>
            ) : (
              <Badge variant="secondary" className="rounded-full text-xs">
                Former
              </Badge>
            )}
          </div>
          <p className="mb-2 text-sm font-medium text-primary">
            {role.company}
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {role.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-10 flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2">
              <Briefcase className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-heading text-3xl font-bold">Experience</h2>
          </div>
        </motion.div>

        {/* Current */}
        <div className="mb-10 space-y-4">
          {currentRoles.map((role, i) => (
            <RoleCard key={role.title} role={role} index={i} isFaded={false} />
          ))}
        </div>

        {/* Former */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4 flex items-center gap-2">
            <Clock className="text-muted-foreground h-4 w-4" />
            <h3 className="font-heading text-muted-foreground text-lg font-semibold">
              Former Positions
            </h3>
          </div>
        </motion.div>
        <div className="space-y-4">
          {formerRoles.map((role, i) => (
            <RoleCard key={role.title} role={role} index={i} isFaded={true} />
          ))}
        </div>
      </div>
    </section>
  );
}
