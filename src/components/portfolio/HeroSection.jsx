import { motion } from "framer-motion";
import { MapPin, Link2, Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import LiveStatus from "./LiveStatus";

const AVATAR_URL =
  "https://captainpandamonkey5.github.io/pandamonkeycard/assets/cpm_logo_b-C654XF6u.png";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
    >
      {/* Ambient gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-primary/8 absolute left-1/2 top-20 h-[600px] w-[600px] -translate-x-1/2 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <img
              src={AVATAR_URL}
              alt="PandaMonkey"
              className="border-background h-28 w-28 rounded-full border-4 object-cover shadow-2xl"
            />
            <div className="border-background absolute bottom-1 right-1 h-5 w-5 rounded-full border-[3px] bg-green-500" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-heading mb-4 text-5xl font-bold tracking-tight md:text-6xl"
        >
          PandaMonkey<span className="text-primary">.</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="font-heading mb-3 text-xl font-semibold text-primary md:text-2xl"
        >
          Junior Web Developer
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="text-muted-foreground mb-6 text-base"
        >
          I build things for the web 🐼 — and occasionally break them too
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-muted-foreground mb-10 flex items-center justify-center gap-5 text-sm"
        >
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4" /> Australia
          </span>
          <span className="flex items-center gap-1.5">
            <Link2 className="h-4 w-4" /> Virtual Graffiti Australia
          </span>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="font-heading gap-2 rounded-full px-8 font-semibold"
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get in Touch
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="font-heading gap-2 rounded-full px-8 font-semibold"
            onClick={() => {
              // Resume download - opens in new tab
              window.open(
                "https://captainpandamonkey5.github.io/pandamonkeycard/assets/PandaMonkey_Resume.pdf",
                "_blank",
              );
            }}
          >
            <Download className="h-4 w-4" /> Resume
          </Button>
        </motion.div>

        <LiveStatus />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-10"
        >
          <button
            onClick={() =>
              document
                .querySelector("#about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
