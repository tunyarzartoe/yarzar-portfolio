import React, {
  useEffect,
  useMemo,
  useState,
} from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { RiGithubFill } from "react-icons/ri";
import {
  AiOutlineStar,
  AiOutlineFork,
  AiOutlineLink,
} from "react-icons/ai";
import Link from "next/link";

const GITHUB_USERNAME = "tunyarzartoe";
const GITHUB_PROFILE = `https://github.com/${GITHUB_USERNAME}`;

const getThemeClasses = (isDark) => ({
  shell: isDark
    ? "border-[#30363d] bg-[#0d1117]"
    : "border-[#d0d7de] bg-white",
  shellAlt: isDark
    ? "bg-[#161b22]"
    : "bg-[#f6f8fa]",
  panel: isDark
    ? "bg-[#0d1117]"
    : "bg-white",
  panelAlt: isDark
    ? "bg-[#161b22]"
    : "bg-[#f6f8fa]",
  divider: isDark
    ? "border-[#21262d]"
    : "border-[#d8dee4]",
  input: isDark
    ? "border-[#30363d] bg-[#0d1117] text-[#c9d1d9]"
    : "border-[#d0d7de] bg-white text-[#24292f]",
  inputHover: isDark
    ? "hover:border-[#8b949e] hover:text-white"
    : "hover:border-[#0969da] hover:text-[#0969da]",
  heading: isDark
    ? "text-white"
    : "text-[#1f2328]",
  text: isDark
    ? "text-[#c9d1d9]"
    : "text-[#24292f]",
  secondary: isDark
    ? "text-[#8b949e]"
    : "text-[#57606a]",
  tertiary: isDark
    ? "text-[#6e7681]"
    : "text-[#656d76]",
  link: isDark
    ? "text-[#58a6ff]"
    : "text-[#0969da]",
  borderSubtle: isDark
    ? "border-[#21262d]"
    : "border-[#d8dee4]",
  skeleton: isDark
    ? "bg-[#161b22]"
    : "bg-[#eaeef2]",
  repoCard: isDark
    ? "border-[#21262d] bg-[#0d1117] hover:border-[#484f58] hover:bg-[#161b22]"
    : "border-[#d0d7de] bg-white hover:border-[#8c959f] hover:bg-[#f6f8fa]",
  tooltip: isDark
    ? "border-[#30363d] bg-[#0d1117]"
    : "border-[#d0d7de] bg-white",
  tooltipText: isDark
    ? "text-white"
    : "text-[#1f2328]",
  tooltipMuted: isDark
    ? "text-[#8b949e]"
    : "text-[#57606a]",
  icon: isDark
    ? "text-[#6e7681]"
    : "text-[#57606a]",
  statCard: isDark
    ? "border-[#21262d] bg-[#0d1117] hover:border-[#30363d]"
    : "border-[#d0d7de] bg-white hover:border-[#d8dee4]",
  heatmapGrid: isDark
    ? "bg-[#0d1117]"
    : "bg-white",
  heatmapLabel: isDark
    ? "text-[#8b949e]"
    : "text-[#57606a]",
  empty: isDark
    ? "border-[#30363d]"
    : "border-[#d0d7de]",
});

const LANG_COLORS = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  Java: "#b07219",
  CSS: "#563d7c",
  HTML: "#e34c26",
  Ruby: "#701516",
  Go: "#00ADD8",
  Rust: "#dea584",
  Shell: "#89e051",
  PHP: "#4F5D95",
  C: "#555555",
  "C++": "#f34b7d",
  default: "#8b949e",
};

const CONTRIBUTION_COLORS = [
  "#161b22",
  "#0e4429",
  "#006d32",
  "#26a641",
  "#39d353",
];

const getContributionColor = (level) => {
  const safeLevel = Math.max(
    0,
    Math.min(4, Number(level) || 0)
  );

  return CONTRIBUTION_COLORS[safeLevel];
};

const formatNumber = (value) =>
  Number(value || 0).toLocaleString();

const formatDate = (date) => {
  if (!date) return "";

  return new Date(`${date}T00:00:00`).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    }
  );
};

const buildContributionGrid = (contributions = []) => {
  if (!Array.isArray(contributions)) return [];

  const valid = contributions
    .filter((day) => day?.date)
    .map((day) => ({
      ...day,
      count: Number(day.count) || 0,
      level: Number(day.level) || 0,
    }))
    .sort((a, b) => a.date.localeCompare(b.date));

  if (!valid.length) return [];

  const map = new Map(
    valid.map((day) => [day.date, day])
  );

  const parseDate = (dateString) => {
    const [year, month, day] = dateString
      .split("-")
      .map(Number);

    return new Date(
      Date.UTC(year, month - 1, day)
    );
  };

  const formatISODate = (date) =>
    date.toISOString().slice(0, 10);

  const first = parseDate(valid[0].date);
  const last = parseDate(
    valid[valid.length - 1].date
  );

  first.setUTCDate(
    first.getUTCDate() - first.getUTCDay()
  );

  last.setUTCDate(
    last.getUTCDate() +
      (6 - last.getUTCDay())
  );

  const weeks = [];
  const cursor = new Date(first);

  while (cursor <= last) {
    const week = [];

    for (let i = 0; i < 7; i += 1) {
      const date = formatISODate(cursor);

      week.push(
        map.get(date) || {
          date,
          count: 0,
          level: 0,
        }
      );

      cursor.setUTCDate(
        cursor.getUTCDate() + 1
      );
    }

    weeks.push(week);
  }

  return weeks;
};

const calculateStats = (contributions = []) => {
  const days = [...contributions].sort((a, b) =>
    a.date.localeCompare(b.date)
  );

  let total = 0;
  let longestStreak = 0;
  let runningStreak = 0;
  let bestDay = null;

  days.forEach((day) => {
    const count = Number(day.count) || 0;

    total += count;

    if (
      !bestDay ||
      count > Number(bestDay.count || 0)
    ) {
      bestDay = day;
    }

    if (count > 0) {
      runningStreak += 1;
      longestStreak = Math.max(
        longestStreak,
        runningStreak
      );
    } else {
      runningStreak = 0;
    }
  });

  let currentStreak = 0;

  for (let i = days.length - 1; i >= 0; i -= 1) {
    if (Number(days[i].count) > 0) {
      currentStreak += 1;
    } else {
      break;
    }
  }

  return {
    total,
    currentStreak,
    longestStreak,
    bestDay,
  };
};

const ContributionTooltip = ({
  tooltip,
  isDark,
}) => {
  if (!tooltip) return null;

  const theme = getThemeClasses(isDark);

  return (
    <div
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: tooltip.x + 12,
        top: tooltip.y + 12,
      }}
    >
      <div
        className={`rounded-lg border px-3 py-2 shadow-2xl ${theme.tooltip}`}
      >
        <p className={`text-xs font-medium ${theme.tooltipText}`}>
          {tooltip.count}{" "}
          {tooltip.count === 1
            ? "contribution"
            : "contributions"}
        </p>

        <p className={`mt-1 text-[11px] ${theme.tooltipMuted}`}>
          {formatDate(tooltip.date)}
        </p>
      </div>
    </div>
  );
};

const GitHubHeatmap = ({
  contributions = [],
  total = 0,
}) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const theme = getThemeClasses(isDark);
  const weeks = useMemo(
    () => buildContributionGrid(contributions),
    [contributions]
  );

  const [tooltip, setTooltip] = useState(null);

  const monthLabels = useMemo(() => {
    const labels = [];

    weeks.forEach((week, weekIndex) => {
      const firstDay = week[0];

      if (!firstDay?.date) return;

      const date = new Date(
        `${firstDay.date}T00:00:00`
      );

      const month = date.toLocaleDateString(
        "en-US",
        {
          month: "short",
        }
      );

      const previous = labels[labels.length - 1];

      if (!previous || previous.month !== month) {
        labels.push({
          weekIndex,
          month,
        });
      }
    });

    return labels;
  }, [weeks]);

  if (!weeks.length) {
    return (
      <div className="flex min-h-[160px] items-center justify-center">
        <p className={`text-sm ${theme.secondary}`}>
          No contribution data available.
        </p>
      </div>
    );
  }

  const square = 11;
  const gap = 3;

  return (
    <div className={`relative max-container padding-container ${theme.heatmapGrid}`}>
      <div className="mb-3 flex items-center justify-between">
        <p className={`text-sm ${theme.secondary}`}>
          <span className={`font-semibold ${theme.heading}`}>
            {formatNumber(total)}
          </span>{" "}
          contributions in the last year
        </p>

        <Link
          href={GITHUB_PROFILE}
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden items-center gap-1 text-xs transition-colors sm:flex ${theme.secondary} hover:${theme.heading}`}
        >
          View profile
          <AiOutlineLink />
        </Link>
      </div>

      <div className="overflow-x-auto pb-3">
        <div className="min-w-max">
          <div
            className="relative mb-2 ml-8 h-4"
            style={{
              width:
                weeks.length * (square + gap),
            }}
          >
            {monthLabels.map(
              ({ weekIndex, month }) => (
                <span
                  key={`${month}-${weekIndex}`}
                  className={`absolute text-[10px] ${theme.heatmapLabel}`}
                  style={{
                    left:
                      weekIndex *
                      (square + gap),
                  }}
                >
                  {month}
                </span>
              )
            )}
          </div>

          <div className="flex">
            <div
              className={`mr-2 grid shrink-0 grid-rows-7 text-[10px] ${theme.heatmapLabel}`}
              style={{
                gap: `${gap}px`,
              }}
            >
              <span />
              <span>Mon</span>
              <span />
              <span>Wed</span>
              <span />
              <span>Fri</span>
              <span />
            </div>

            <div
              className="grid"
              style={{
                gridTemplateColumns: `repeat(${weeks.length}, ${square}px)`,
                gridTemplateRows: `repeat(7, ${square}px)`,
                gridAutoFlow: "column",
                gap: `${gap}px`,
              }}
            >
              {weeks.map((week, weekIndex) =>
                week.map((day) => {
                  const level =
                    Number(day.level) || 0;

                  return (
                    <button
                      key={`${weekIndex}-${day.date}`}
                      type="button"
                      aria-label={`${day.count} contributions on ${formatDate(
                        day.date
                      )}`}
                      onMouseEnter={(event) => {
                        setTooltip({
                          x: event.clientX,
                          y: event.clientY,
                          date: day.date,
                          count: day.count,
                        });
                      }}
                      onMouseMove={(event) => {
                        setTooltip((current) =>
                          current
                            ? {
                                ...current,
                                x: event.clientX,
                                y: event.clientY,
                              }
                            : null
                        );
                      }}
                      onMouseLeave={() =>
                        setTooltip(null)
                      }
                      className="rounded-[2px] border border-black/10 outline-none transition-transform duration-100 hover:scale-125 focus:ring-1 focus:ring-white"
                      style={{
                        width: square,
                        height: square,
                        backgroundColor:
                          getContributionColor(
                            level
                          ),
                      }}
                    />
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={`mt-2 flex items-center justify-end gap-1.5 text-[10px] ${theme.secondary}`}>
        <span className="mr-1">Less</span>

        {[0, 1, 2, 3, 4].map((level) => (
          <span
            key={level}
            className="rounded-[2px]"
            style={{
              width: square,
              height: square,
              backgroundColor:
                getContributionColor(level),
            }}
          />
        ))}

        <span className="ml-1">More</span>
      </div>

      <ContributionTooltip tooltip={tooltip} isDark={isDark} />
    </div>
  );
};

const StatCard = ({
  value,
  label,
  icon,
  isDark,
}) => {
  const theme = getThemeClasses(isDark);

  return (
    <div className={`group rounded-xl border p-4 transition-all duration-200 ${theme.statCard}`}>
      <div className="mb-2 flex items-center justify-between">
        <span className={`text-xs ${theme.secondary}`}>
          {label}
        </span>

        {icon && (
          <span className={theme.icon}>{icon}</span>
        )}
      </div>

      <div className={`text-2xl font-semibold tracking-tight ${theme.heading}`}>
        {formatNumber(value)}
      </div>
    </div>
  );
};

const LanguageBar = ({
  languages = [],
  isDark,
}) => {
  const theme = getThemeClasses(isDark);

  if (!languages.length) {
    return (
      <p className={`text-xs ${theme.secondary}`}>
        No language data available.
      </p>
    );
  }

  const max = Math.max(
    ...languages.map(
      (language) => language.count
    ),
    1
  );

  return (
    <div className="space-y-3">
      {languages.map((language) => {
        const color =
          language.color ||
          LANG_COLORS[language.name] ||
          LANG_COLORS.default;

        const width = Math.max(
          8,
          Math.round(
            (language.count / max) * 100
          )
        );

        return (
          <div
            key={language.name}
            className="group"
          >
            <div className="mb-1.5 flex items-center justify-between text-xs">
              <div className="flex min-w-0 items-center gap-2">
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{
                    backgroundColor: color,
                  }}
                />

                <span className={`truncate ${theme.text}`}>
                  {language.name}
                </span>
              </div>

              <span className={theme.tertiary}>
                {language.count} repos
              </span>
            </div>

            <div className={`h-1.5 overflow-hidden rounded-full ${isDark ? "bg-[#21262d]" : "bg-[#eaeef2]"}`}>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{
                  width: `${width}%`,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
                className="h-full rounded-full"
                style={{
                  backgroundColor: color,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const RepoCard = ({ repo, isDark }) => {
  const color =
    repo.languageColor ||
    LANG_COLORS[repo.language] ||
    LANG_COLORS.default;
  const theme = getThemeClasses(isDark);

  return (
    <Link
      href={repo.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block rounded-xl border p-4 transition-all duration-200 ${theme.repoCard}`}
    >
      <div className="mb-2 flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          <RiGithubFill className={`shrink-0 ${theme.secondary}`} />

          <span className={`truncate text-sm font-semibold ${theme.link} group-hover:underline`}>
            {repo.repo}
          </span>
        </div>

        <AiOutlineLink className={`shrink-0 transition-colors ${theme.tertiary} group-hover:${theme.heading}`} />
      </div>

      <p className={`mb-4 line-clamp-2 min-h-[38px] text-xs leading-relaxed ${theme.secondary}`}>
        {repo.description ||
          "No description provided."}
      </p>

      <div className={`flex items-center gap-4 text-[11px] ${theme.secondary}`}>
        {repo.language && (
          <span className="flex items-center gap-1.5">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{
                backgroundColor: color,
              }}
            />
            {repo.language}
          </span>
        )}

        <span className="flex items-center gap-1">
          <AiOutlineStar />
          {repo.stars}
        </span>

        <span className="flex items-center gap-1">
          <AiOutlineFork />
          {repo.forks}
        </span>
      </div>
    </Link>
  );
};

const LoadingSkeleton = ({ isDark }) => {
  const theme = getThemeClasses(isDark);

  return (
    <div className="animate-pulse space-y-6">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className={`h-24 rounded-xl ${theme.skeleton}`}
          />
        ))}
      </div>

      <div className={`h-[230px] rounded-xl ${theme.skeleton}`} />

      <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
        <div className={`h-48 rounded-xl ${theme.skeleton}`} />
        <div className={`h-48 rounded-xl ${theme.skeleton}`} />
      </div>
    </div>
  );
};

const GitHubStats = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const theme = getThemeClasses(isDark);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const loadGitHubStats = async () => {
      try {
        const response = await fetch(
          "/api/github-stats",
          {
            method: "GET",
            cache: "no-store",
          }
        );

        const payload = await response.json();

        if (!response.ok) {
          throw new Error(
            payload?.error ||
              "Failed to load GitHub data."
          );
        }

        if (!cancelled) {
          setData(payload);
        }
      } catch (error) {
        console.error(
          "GitHub stats error:",
          error
        );

        if (!cancelled) {
          setData(null);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadGitHubStats();

    return () => {
      cancelled = true;
    };
  }, []);

  const contributions =
    data?.contrib?.contributions || [];

  const stats = useMemo(
    () => calculateStats(contributions),
    [contributions]
  );

  return (
    <section className="padding-container max-container mb-16 lg:mb-8">
      <motion.div
        initial={{
          opacity: 0,
          y: 24,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          margin: "-80px",
        }}
        transition={{
          duration: 0.55,
          ease: "easeOut",
        }}
      >
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-3">
              <RiGithubFill className={`text-3xl ${theme.heading}`} />

              <h2 className={`text-3xl font-bold ${theme.heading}`}>
                GitHub
              </h2>
            </div>

            <p className={`text-sm ${theme.secondary}`}>
              Open source activity, projects and
              contribution history.
            </p>
          </div>

          <Link
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex w-fit items-center gap-2 rounded-lg border px-4 py-2 text-xs font-medium ${theme.input} ${theme.inputHover}`}
          >
            <RiGithubFill />
            @{GITHUB_USERNAME}
            <AiOutlineLink />
          </Link>
        </div>

        <div className={`overflow-hidden rounded-2xl border shadow-2xl ${theme.shell}`}>
          {loading ? (
            <div className="p-5 md:p-7">
              <LoadingSkeleton isDark={isDark} />
            </div>
          ) : data ? (
            <>
              <div className={`border-b p-5 md:p-7 ${theme.divider}`}>
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    {data.avatar && (
                      <img
                        src={data.avatar}
                        alt={data.name || data.username}
                        className="h-14 w-14 rounded-full border border-[#30363d]"
                      />
                    )}

                    <div>
                      <h3 className={`text-base font-semibold ${theme.heading}`}>
                        {data.name ||
                          data.username}
                      </h3>

                      <p className={`mt-0.5 text-xs ${theme.secondary}`}>
                        @{data.username}
                      </p>

                      {data.bio && (
                        <p className={`mt-2 max-w-xl text-xs ${theme.secondary}`}>
                          {data.bio}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className={`flex flex-wrap gap-x-5 gap-y-2 text-xs ${theme.secondary}`}>
                    <span>
                      <strong className={theme.heading}>
                        {formatNumber(
                          data.followers
                        )}
                      </strong>{" "}
                      followers
                    </span>

                    <span>
                      <strong className={theme.heading}>
                        {formatNumber(
                          data.following
                        )}
                      </strong>{" "}
                      following
                    </span>
                  </div>
                </div>
              </div>

              <div className={`grid grid-cols-2 gap-px md:grid-cols-4 ${theme.divider}`}>
                <div className={`p-4 md:p-5 ${theme.panel}`}>
                  <StatCard
                    value={data.repositories}
                    label="Repositories"
                    isDark={isDark}
                  />
                </div>

                <div className={`p-4 md:p-5 ${theme.panel}`}>
                  <StatCard
                    value={data.totalStars}
                    label="Total stars"
                    icon={<AiOutlineStar />}
                    isDark={isDark}
                  />
                </div>

                <div className={`p-4 md:p-5 ${theme.panel}`}>
                  <StatCard
                    value={data.totalForks}
                    label="Total forks"
                    icon={<AiOutlineFork />}
                    isDark={isDark}
                  />
                </div>

                <div className={`p-4 md:p-5 ${theme.panel}`}>
                  <StatCard
                    value={
                      data.contrib?.total
                        ?.total ?? stats.total
                    }
                    label="Contributions"
                    isDark={isDark}
                  />
                </div>
              </div>

              <div className={`border-b p-5 md:p-7 ${theme.divider}`}>
                <GitHubHeatmap
                  contributions={contributions}
                  total={
                    data.contrib?.total
                      ?.total ?? 0
                  }
                />

                <div className="mt-5 flex flex-wrap gap-3">
                  <div className={`rounded-lg border px-3 py-2 ${theme.panelAlt} ${theme.divider}`}>
                    <span className={`block text-[10px] uppercase tracking-wide ${theme.tertiary}`}>
                      Current streak
                    </span>
                    <span className={`text-sm font-semibold ${theme.heading}`}>
                      {stats.currentStreak} days
                    </span>
                  </div>

                  <div className={`rounded-lg border px-3 py-2 ${theme.panelAlt} ${theme.divider}`}>
                    <span className={`block text-[10px] uppercase tracking-wide ${theme.tertiary}`}>
                      Longest streak
                    </span>
                    <span className={`text-sm font-semibold ${theme.heading}`}>
                      {stats.longestStreak} days
                    </span>
                  </div>

                  {stats.bestDay && (
                    <div className={`rounded-lg border px-3 py-2 ${theme.panelAlt} ${theme.divider}`}>
                      <span className={`block text-[10px] uppercase tracking-wide ${theme.tertiary}`}>
                        Best day
                      </span>
                      <span className={`text-sm font-semibold ${theme.heading}`}>
                        {stats.bestDay.count}{" "}
                        contributions
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid lg:grid-cols-[280px_1fr]">
                <div className={`border-b p-5 md:p-7 lg:border-b-0 lg:border-r ${theme.divider}`}>
                  <div className="mb-5">
                    <h3 className={`text-sm font-semibold ${theme.heading}`}>
                      Top languages
                    </h3>

                    <p className={`mt-1 text-xs ${theme.tertiary}`}>
                      Based on repositories
                    </p>
                  </div>

                  <LanguageBar
                    languages={
                      data.languages || []
                    }
                    isDark={isDark}
                  />
                </div>

                <div className="p-5 md:p-7">
                  <div className="mb-5 flex items-end justify-between">
                    <div>
                      <h3 className={`text-sm font-semibold ${theme.heading}`}>
                        Featured repositories
                      </h3>

                      <p className={`mt-1 text-xs ${theme.tertiary}`}>
                        Selected projects from GitHub
                      </p>
                    </div>

                    <Link
                      href={`${GITHUB_PROFILE}?tab=repositories`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`hidden text-xs ${theme.link} hover:underline sm:block`}
                    >
                      View all
                    </Link>
                  </div>

                  {data.pinned?.length ? (
                    <div className="grid gap-3 sm:grid-cols-2">
                      {data.pinned
                        .slice(0, 6)
                        .map((repo) => (
                          <RepoCard
                            key={repo.repo}
                            repo={repo}
                            isDark={isDark}
                          />
                        ))}
                    </div>
                  ) : (
                    <div className={`rounded-xl border border-dashed p-8 text-center ${theme.empty}`}>
                      <RiGithubFill className={`mx-auto mb-2 text-2xl ${theme.tertiary}`} />
                      <p className={`text-xs ${theme.secondary}`}>
                        No pinned repositories.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
              <RiGithubFill className={`mb-4 text-5xl ${isDark ? "text-[#30363d]" : "text-[#c3c9d2]"}`} />

              <h3 className={`text-base font-semibold ${theme.heading}`}>
                GitHub data unavailable
              </h3>

              <p className={`mt-2 max-w-sm text-xs leading-relaxed ${theme.secondary}`}>
                GitHub statistics could not be
                loaded right now.
              </p>

              <Link
                href={GITHUB_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-5 rounded-lg border px-4 py-2 text-xs ${theme.input} ${theme.inputHover}`}
              >
                Visit GitHub
              </Link>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default GitHubStats;