import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Coffee, Moon } from "lucide-react";

const STATUSES = [
  {
    id: "working",
    label: "Available for work",
    detail: "Open to new opportunities",
    icon: Zap,
    color: "bg-green-500",
    textColor: "text-green-600 dark:text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  },
  {
    id: "busy",
    label: "Deep in code",
    detail: "Building something cool",
    icon: Coffee,
    color: "bg-amber-500",
    textColor: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
];

// Show "available" during AU business hours (9am-6pm AEST = UTC+10)
function getCurrentStatus() {
  const hour = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Australia/Sydney" }),
  ).getHours();
  if (hour >= 9 && hour < 18) return STATUSES[0];
  return STATUSES[1];
}

export default function LiveStatus() {
  const [status, setStatus] = useState(getCurrentStatus());
  const [currentActivity, setCurrentActivity] = useState(0);

  const activities = [
    "🛠️ Building web apps",
    "📚 Learning new tech",
    "☕ Fuelled by coffee",
    "🎮 Taking a gaming break",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentActivity((prev) => (prev + 1) % activities.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const Icon = status.icon;

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      className={`inline-flex flex-col items-center gap-3 rounded-2xl border px-6 py-4 ${status.bg} ${status.border} mt-8`}
    >
      {/* Live dot + status */}
      <div className="flex items-center gap-2.5">
        <span className="relative flex h-2.5 w-2.5">
          <span
            className={`absolute inline-flex h-full w-full animate-ping rounded-full ${status.color} opacity-60`}
          />
          <span
            className={`relative inline-flex h-2.5 w-2.5 rounded-full ${status.color}`}
          />
        </span>
        <span
          className={`font-heading text-sm font-semibold ${status.textColor}`}
        >
          {status.label}
        </span>
        <Icon className={`h-4 w-4 ${status.textColor}`} />
      </div>

      {/* Rotating activity */}
      <div className="h-5 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentActivity}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="text-muted-foreground text-center text-xs"
          >
            {activities[currentActivity]}
          </motion.p>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
