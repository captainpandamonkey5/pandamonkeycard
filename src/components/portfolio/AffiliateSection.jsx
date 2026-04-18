import { motion } from "framer-motion";
import { ExternalLink, Star, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const affiliates = [
  {
    name: "Virtual Graffiti Australia",
    tagline: "Premium IT products & solutions",
    description:
      "My employer — Australia's leading IT product distributor. Incredible range of hardware, software, and enterprise solutions.",
    url: "https://www.vgaust.com.au",
    badge: "Employer",
    badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    emoji: "🏢",
    tags: ["IT Products", "Enterprise", "Hardware", "Software"],
    featured: true,
  },
  {
    name: "The High Exchange (THX)",
    tagline: "Community for traders & enthusiasts",
    description:
      "A thriving Discord community I've been part of — connecting traders, developers, and enthusiasts. Great people, great vibes.",
    url: "#",
    badge: "Community",
    badgeColor: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
    emoji: "💬",
    tags: ["Discord", "Community", "Trading"],
    featured: false,
  },
  {
    name: "GitHub Student Pack",
    tagline: "Free developer tools for students",
    description:
      "The best free toolkit for any student developer. Includes GitHub Pro, cloud credits, domain names and tons of dev tools.",
    url: "https://education.github.com/pack",
    badge: "Resource",
    badgeColor: "bg-green-500/10 text-green-600 dark:text-green-400",
    emoji: "🎒",
    tags: ["Free", "Students", "Dev Tools"],
    featured: false,
  },
  {
    name: "Vercel",
    tagline: "Deploy frontend apps instantly",
    description:
      "Where I deploy my frontend projects. Zero-config, blazing fast, and the free tier is more than enough to get started.",
    url: "https://vercel.com",
    badge: "Tool",
    badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    emoji: "⚡",
    tags: ["Hosting", "Deployment", "Frontend"],
    featured: false,
  },
];

function AffiliateCard({ item, index }) {
  return (
    <motion.a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -3 }}
      className="bg-card border-border/50 group block overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg"
    >
      {item.featured && (
        <div className="h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60" />
      )}
      <div className="p-6">
        <div className="mb-3 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-muted flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-2xl">
              {item.emoji}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-heading text-base font-semibold transition-colors group-hover:text-primary">
                  {item.name}
                </h3>
                {item.featured && (
                  <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                )}
              </div>
              <p className="text-muted-foreground text-xs">{item.tagline}</p>
            </div>
          </div>
          <span
            className={`rounded-full px-2.5 py-1 text-xs font-medium ${item.badgeColor} shrink-0`}
          >
            {item.badge}
          </span>
        </div>

        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
          {item.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-secondary-foreground rounded-full bg-secondary px-2.5 py-0.5 text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
          <ExternalLink className="text-muted-foreground ml-2 h-4 w-4 shrink-0 transition-colors group-hover:text-primary" />
        </div>
      </div>
    </motion.a>
  );
}

export default function AffiliateSection() {
  return (
    <section id="affiliates" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2">
              <Tag className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-heading text-3xl font-bold">
              Links & Resources
            </h2>
            <span className="text-2xl">🔗</span>
          </div>
          <p className="text-muted-foreground mb-10 ml-1 text-sm">
            Places I work, communities I'm part of, and tools I actually use
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {affiliates.map((item, i) => (
            <AffiliateCard key={item.name} item={item} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-muted-foreground mt-8 text-center text-xs"
        >
          Some links may be affiliate links. I only recommend things I genuinely
          use or believe in. 🤝
        </motion.p>
      </div>
    </section>
  );
}
