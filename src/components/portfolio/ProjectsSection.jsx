import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Folder,
  ExternalLink,
  Github,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ALL_TAGS = ["All", "Frontend", "Backend", "Bot", "Tools"];

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive personal portfolio showcasing skills, projects, and experience with smooth animations and dark mode support.",
    details:
      "Built with React and Tailwind CSS, featuring component-based architecture, framer-motion animations, and a fully responsive layout. Includes a contact form, dark mode toggle, and resume download functionality.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Responsive"],
    category: "Frontend",
    links: { live: "#", github: "#" },
    featured: true,
  },
  {
    title: "Random Picker",
    description:
      "An interactive tool for making random selections and decisions — spin the wheel, flip a coin, or pick from custom lists.",
    details:
      "Built with Vue.js, this web app features multiple randomization modes including a customizable wheel spinner, coin flipper, and list picker. Uses CSS animations for smooth visual feedback and localStorage for saving custom lists.",
    tags: ["Vue.js", "CSS Animations", "Web App", "LocalStorage"],
    category: "Frontend",
    links: { live: "#", github: "#" },
    featured: false,
  },
  {
    title: "Discord Bots",
    description:
      "Custom Discord bots for The High Exchange community — handling moderation, auto-roles, welcome messages, and utility commands.",
    details:
      "A collection of Node.js bots using Discord.js, connected to MongoDB for persistent data storage. Features include auto-moderation, custom commands, role management, logging, and integration with external APIs for real-time data.",
    tags: ["Node.js", "Discord.js", "MongoDB", "REST APIs"],
    category: "Bot",
    links: { github: "#" },
    featured: false,
  },
];

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      className="bg-card border-border/50 group overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg"
    >
      {/* Header gradient strip */}
      <div className="h-1.5 bg-gradient-to-r from-primary/60 via-primary to-primary/60" />

      <div className="p-6">
        <div className="mb-3 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2">
              <Folder className="h-4 w-4 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-semibold">
              {project.title}
            </h3>
          </div>
          {project.featured && (
            <Badge className="rounded-full border-0 bg-primary/10 text-xs text-primary hover:bg-primary/10">
              Featured
            </Badge>
          )}
        </div>

        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
          {project.description}
        </p>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="bg-muted/50 border-border/30 mb-4 rounded-xl border p-4">
                <p className="text-foreground/80 text-sm leading-relaxed">
                  {project.details}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-secondary-foreground rounded-full bg-secondary px-3 py-1 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 text-xs font-medium text-primary transition-colors hover:text-primary/80"
          >
            {expanded ? (
              <ChevronUp className="h-3.5 w-3.5" />
            ) : (
              <ChevronDown className="h-3.5 w-3.5" />
            )}
            {expanded ? "Less details" : "More details"}
          </button>
          <div className="flex-1" />
          {project.links.live && (
            <Button
              size="sm"
              variant="ghost"
              className="h-8 gap-1.5 px-3 text-xs"
              asChild
            >
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-3.5 w-3.5" /> Live
              </a>
            </Button>
          )}
          {project.links.github && (
            <Button
              size="sm"
              variant="ghost"
              className="h-8 gap-1.5 px-3 text-xs"
              asChild
            >
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-3.5 w-3.5" /> Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2">
              <Folder className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-heading text-3xl font-bold">
              Featured Projects
            </h2>
            <span className="text-2xl">🚀</span>
          </div>
          <p className="text-muted-foreground mb-8 ml-1 text-sm">
            Things I've built — from useful tools to experiments
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="mb-8 flex flex-wrap gap-2">
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeFilter === tag
                  ? "text-primary-foreground bg-primary shadow-lg shadow-primary/25"
                  : "bg-card border-border/50 text-muted-foreground hover:text-foreground border hover:border-primary/30"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid gap-6"
          >
            {filtered.length === 0 ? (
              <div className="text-muted-foreground py-16 text-center">
                <span className="mb-3 block text-4xl">🏗️</span>
                <p className="font-medium">Nothing here yet — stay tuned!</p>
              </div>
            ) : (
              filtered.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
