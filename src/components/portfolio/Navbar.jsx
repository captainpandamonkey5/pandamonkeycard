import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const links = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Milestones", href: "#achievements" },
    { label: "Projects", href: "#projects" },
    { label: "Links", href: "#affiliates" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-background/80 border-border/50 fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <button
          onClick={() => scrollTo("#hero")}
          className="font-heading text-foreground text-xl font-bold transition-colors hover:text-primary"
        >
          PM<span className="text-primary">.</span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => setDark(!dark)}
            className="rounded-full bg-secondary p-2 transition-colors hover:bg-secondary/80"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setDark(!dark)}
            className="rounded-full bg-secondary p-2 transition-colors hover:bg-secondary/80"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2">
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-border/50 bg-background/95 overflow-hidden border-t backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-3 px-6 py-4">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => scrollTo(l.href)}
                  className="text-muted-foreground hover:text-foreground py-2 text-left text-sm font-medium transition-colors"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
