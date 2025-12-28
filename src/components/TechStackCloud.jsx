import { useEffect, useMemo, useState } from "react";

const techCategories = {
  backend: {
    gradient: "from-amber-400 via-orange-500 to-red-500",
    halo: "shadow-[0_0_30px_rgba(251,146,60,0.35)]",
    label: "Backend",
  },
  frontend: {
    gradient: "from-cyan-400 via-sky-400 to-blue-500",
    halo: "shadow-[0_0_30px_rgba(56,189,248,0.35)]",
    label: "Frontend",
  },
  database: {
    gradient: "from-emerald-400 via-lime-400 to-teal-500",
    halo: "shadow-[0_0_30px_rgba(52,211,153,0.35)]",
    label: "Data Layer",
  },
  cloud: {
    gradient: "from-fuchsia-400 via-purple-500 to-indigo-500",
    halo: "shadow-[0_0_30px_rgba(168,85,247,0.35)]",
    label: "Cloud & Infra",
  },
  tools: {
    gradient: "from-pink-400 via-rose-400 to-orange-400",
    halo: "shadow-[0_0_30px_rgba(244,114,182,0.35)]",
    label: "Tooling",
  },
  other: {
    gradient: "from-slate-300 via-slate-400 to-slate-500",
    halo: "shadow-[0_0_30px_rgba(148,163,184,0.35)]",
    label: "Special Ops",
  },
};

const categorizeTech = (tech) => {
  const lower = tech.toLowerCase();
  if (lower.includes("node") || lower.includes("express") || lower.includes("api") || lower.includes("serverless")) return "backend";
  if (lower.includes("react") || lower.includes("next") || lower.includes("typescript") || lower.includes("frontend")) return "frontend";
  if (lower.includes("sql") || lower.includes("mongo") || lower.includes("database") || lower.includes("db")) return "database";
  if (lower.includes("aws") || lower.includes("cloud") || lower.includes("docker") || lower.includes("ci/cd") || lower.includes("kubernetes")) return "cloud";
  if (lower.includes("git") || lower.includes("npm") || lower.includes("yarn") || lower.includes("storybook") || lower.includes("jest")) return "tools";
  return "other";
};

const getSkillLevel = (tech) => {
  const lower = tech.toLowerCase();
  const expert = ["node.js", "express", "javascript", "typescript", "aws", "mysql", "mongodb", "react", "next.js", "tailwind"];
  const advanced = ["docker", "rest", "serverless", "ci/cd", "vite", "storybook", "jest"];

  if (expert.some((e) => lower.includes(e))) return { level: "Expert", percentage: 96, emoji: "🚀" };
  if (advanced.some((e) => lower.includes(e))) return { level: "Advanced", percentage: 88, emoji: "⚡" };
  return { level: "Proficient", percentage: 78, emoji: "✨" };
};

const generateConstellation = (count) => {
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  return Array.from({ length: count }).map((_, index) => {
    const radius = 110 + index * 14;
    const angle = index * goldenAngle + (index % 2 === 0 ? 0.3 : -0.25);
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  });
};

function TechStackCloud({ technologies = [] }) {
  const [hoveredTech, setHoveredTech] = useState(null);
  const [selectedTech, setSelectedTech] = useState(null);
  const [filter, setFilter] = useState("all");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => setSelectedTech(null), [filter, technologies]);

  const filteredTechs = useMemo(
    () =>
      technologies.filter((tech) => {
        const matchesFilter = filter === "all" || categorizeTech(tech) === filter;
        return matchesFilter;
      }),
    [technologies, filter]
  );

  const layout = useMemo(() => generateConstellation(filteredTechs.length), [filteredTechs.length]);
  const availableCategories = useMemo(() => ["all", ...new Set(technologies.map(categorizeTech))], [technologies]);

  const metrics = useMemo(
    () => ({
      technologies: filteredTechs.length,
      categories: availableCategories.length - 1,
      experts: filteredTechs.filter((t) => getSkillLevel(t).level === "Expert").length,
      uniqueness: new Set(filteredTechs.map((t) => t.toLowerCase())).size,
    }),
    [filteredTechs, availableCategories.length]
  );

  if (technologies.length === 0) return null;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-6 text-slate-900 shadow-[0_50px_120px_-60px_rgba(0,0,0,0.35)] dark:from-slate-900 dark:via-slate-950 dark:to-black dark:text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_40%)] dark:bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),_transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.14)_1px,transparent_1px)] bg-[length:80px_80px]" />
        <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-amber-400/10 blur-3xl" />
        <div className="absolute -left-24 top-10 h-48 w-48 rounded-full bg-gradient-to-r from-amber-300/30 to-pink-400/25 blur-2xl" />
        <div className="absolute -right-24 bottom-10 h-48 w-48 rounded-full bg-gradient-to-r from-cyan-300/25 to-indigo-400/25 blur-2xl" />
      </div>

      <div className="relative space-y-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <p className="font-orbitron text-[11px] uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
              Tech Stack // V3 Nebula
            </p>
            <h3 className="font-space text-2xl md:text-3xl font-semibold">
              Clever, future-facing toolkit engineered for shipping fast and fearlessly.
            </h3>
            <p className="max-w-3xl text-sm text-slate-600 dark:text-slate-300">
              Explore the constellation of tools powering delivery. Filter by discipline, tap nodes to drill into strength
              signals, and watch the orbit realign in real time.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 rounded-2xl border border-white/40 bg-white/60 p-3 text-xs shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-white/5">
            <div className="rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 px-4 py-3 text-white dark:from-slate-100 dark:to-white dark:text-slate-900">
              <div className="text-[11px] uppercase tracking-[0.2em] text-white/70 dark:text-slate-500">Active</div>
              <div className="mt-1 text-2xl font-semibold">{metrics.technologies}</div>
              <div className="text-[11px] uppercase tracking-[0.25em] text-white/70 dark:text-slate-500">Technologies</div>
            </div>
            <div className="rounded-xl border border-white/40 bg-white/60 px-4 py-3 dark:border-white/10 dark:bg-white/5">
              <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Signal</div>
              <div className="mt-1 text-2xl font-semibold">{metrics.experts}</div>
              <div className="text-[11px] uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">Expert Nodes</div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {availableCategories.map((cat) => {
            const category = techCategories[cat] || techCategories.other;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`group relative overflow-hidden rounded-2xl border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  filter === cat
                    ? `border-transparent bg-gradient-to-r ${category.gradient} text-slate-900 shadow-xl ${category.halo}`
                    : "border-white/40 bg-white/70 text-slate-700 shadow-sm hover:border-slate-300 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-xs uppercase tracking-[0.2em]">{cat === "all" ? "All Systems" : category.label}</span>
                  <span className="rounded-full bg-black/5 px-2 py-0.5 text-[11px] text-slate-600 dark:bg-white/10 dark:text-white/80">
                    {cat === "all" ? technologies.length : technologies.filter((t) => categorizeTech(t) === cat).length}
                  </span>
                </span>
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-30">
                  <div className={`absolute inset-[-40%] bg-gradient-to-r ${category.gradient} blur-2xl`} />
                </div>
              </button>
            );
          })}
        </div>

        <div className="relative mt-4 h-[470px] overflow-hidden rounded-3xl border border-white/40 bg-slate-900/90 p-6 shadow-[0_25px_80px_-40px_rgba(0,0,0,0.7)] backdrop-blur-xl dark:border-white/10">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.08),_transparent_55%)]" />
            <div className="absolute inset-6 rounded-3xl border border-white/5" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:70px_70px]" />
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/30 animate-[spin_18s_linear_infinite]" />
            <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-fuchsia-400/20 animate-[spin_26s_linear_infinite]" />
          </div>

          {filteredTechs.map((tech, index) => {
            const pos = layout[index];
            const isHovered = hoveredTech === index;
            const isSelected = selectedTech === index;
            const category = categorizeTech(tech);
            const categoryInfo = techCategories[category] || techCategories.other;
            const skillInfo = getSkillLevel(tech);

            return (
              <div
                key={`${tech}-${index}`}
                className="absolute transition-all duration-700 ease-out"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: mounted
                    ? `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%) scale(${isSelected ? 1.15 : isHovered ? 1.07 : 1})`
                    : "translate(-50%, -50%) scale(0.5)",
                  opacity: mounted ? 1 : 0,
                  transitionDelay: `${index * 35}ms`,
                  zIndex: isSelected ? 20 : isHovered ? 15 : 10,
                }}
                onMouseEnter={() => setHoveredTech(index)}
                onMouseLeave={() => setHoveredTech(null)}
                onClick={() => setSelectedTech(isSelected ? null : index)}
              >
                <div
                  className={`group relative w-48 cursor-pointer rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white shadow-2xl backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:border-white/35 hover:bg-white/10 ${categoryInfo.halo}`}
                  style={{
                    boxShadow: isSelected
                      ? "0 0 40px rgba(59,130,246,0.35)"
                      : isHovered
                        ? "0 0 30px rgba(59,130,246,0.25)"
                        : undefined,
                  }}
                >
                  <div className={`absolute inset-x-2 -top-[1px] h-0.5 rounded-full bg-gradient-to-r ${categoryInfo.gradient}`} />
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-white/70">
                    <span>{categoryInfo.label}</span>
                    <span className="flex items-center gap-1">
                      <span>{skillInfo.emoji}</span>
                      <span>{skillInfo.level}</span>
                    </span>
                  </div>
                  <div className="mt-2 flex items-start justify-between gap-2">
                    <div className="text-lg font-semibold">{tech}</div>
                    <div className="rounded-full border border-white/20 bg-white/5 px-2 py-1 text-[11px]">
                      {Math.round(skillInfo.percentage)}%
                    </div>
                  </div>
                  <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div className={`h-full bg-gradient-to-r ${categoryInfo.gradient}`} style={{ width: `${skillInfo.percentage}%` }} />
                  </div>
                  <div className="mt-3 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-white/60">
                    <span>{filter === "all" ? "Orbiting" : "Filtered"}</span>
                    <span>{index + 1}/{filteredTechs.length}</span>
                  </div>
                  <div className="absolute -inset-[1px] rounded-2xl border border-white/0 opacity-0 transition-opacity duration-300 group-hover:border-white/30 group-hover:opacity-100" />
                </div>
              </div>
            );
          })}

          {selectedTech !== null && filteredTechs[selectedTech] && (
            <div className="absolute inset-x-4 bottom-4 flex flex-col gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 text-sm text-white shadow-2xl backdrop-blur-2xl md:flex-row md:items-center md:justify-between">
              <div className="space-y-1">
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/70">Selected Node</p>
                <div className="text-xl font-semibold">{filteredTechs[selectedTech]}</div>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-xs">
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                  <span>Category</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em]">
                    {techCategories[categorizeTech(filteredTechs[selectedTech])]?.label || "Special Ops"}
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                  <span>Signal</span>
                  <span className="font-semibold">{getSkillLevel(filteredTechs[selectedTech]).emoji} {getSkillLevel(filteredTechs[selectedTech]).level}</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                  <span>Confidence</span>
                  <span className="font-semibold">{getSkillLevel(filteredTechs[selectedTech]).percentage}%</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedTech(null)}
                className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition-colors duration-200 hover:border-white/40"
              >
                Close
              </button>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-300">
          <div className="flex items-center gap-2 rounded-xl border border-white/40 bg-white/70 px-3 py-2 dark:border-white/10 dark:bg-white/5">
            <span className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Unique Nodes</span>
            <span className="text-base font-semibold text-slate-900 dark:text-white">{metrics.uniqueness}</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-white/40 bg-white/70 px-3 py-2 dark:border-white/10 dark:bg-white/5">
            <span className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Categories</span>
            <span className="text-base font-semibold text-slate-900 dark:text-white">{metrics.categories}</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-white/40 bg-white/70 px-3 py-2 dark:border-white/10 dark:bg-white/5">
            <span className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Expert Signal</span>
            <span className="text-base font-semibold text-slate-900 dark:text-white">{metrics.experts}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStackCloud;
