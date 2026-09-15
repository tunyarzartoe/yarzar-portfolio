import React, {
  useEffect,
  useMemo,
  useState,
} from "react";
import { motion } from "framer-motion";
import { RiGithubFill } from "react-icons/ri";
import {
  AiOutlineStar,
  AiOutlineFork,
  AiOutlineLink,
} from "react-icons/ai";
import Link from "next/link";

const GITHUB_USERNAME = "tunyarzartoe";
const GITHUB_PROFILE = `https://github.com/${GITHUB_USERNAME}`;

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
}) => {
  if (!tooltip) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: tooltip.x + 12,
        top: tooltip.y + 12,
      }}
    >
      <div className="rounded-lg border border-[#30363d] bg-[#0d1117] px-3 py-2 shadow-2xl">
        <p className="text-xs font-medium text-white">
          {tooltip.count}{" "}
          {tooltip.count === 1
            ? "contribution"
            : "contributions"}
        </p>

        <p className="mt-1 text-[11px] text-[#8b949e]">
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
        <p className="text-sm text-[#8b949e]">
          No contribution data available.
        </p>
      </div>
    );
  }

  const square = 11;
  const gap = 3;

  return (
    <div className="relative">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm text-[#8b949e]">
          <span className="font-semibold text-white">
            {formatNumber(total)}
          </span>{" "}
          contributions in the last year
        </p>

        <Link
          href={GITHUB_PROFILE}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-1 text-xs text-[#8b949e] transition-colors hover:text-white sm:flex"
        >
          View profile
          <AiOutlineLink />
        </Link>
      </div>

      <div className="overflow-x-auto pb-3">
        <div className="min-w-max">
          {/* Month labels */}
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
                  className="absolute text-[10px] text-[#8b949e]"
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
            {/* Weekday labels */}
            <div
              className="mr-2 grid shrink-0 grid-rows-7 text-[10px] text-[#8b949e]"
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

            {/* Grid */}
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

      <div className="mt-2 flex items-center justify-end gap-1.5 text-[10px] text-[#8b949e]">
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

      <ContributionTooltip tooltip={tooltip} />
    </div>
  );
};

const StatCard = ({
  value,
  label,
  icon,
}) => (
  <div className="group rounded-xl border border-[#21262d] bg-[#0d1117] p-4 transition-all duration-200 hover:border-[#30363d]">
    <div className="mb-2 flex items-center justify-between">
      <span className="text-xs text-[#8b949e]">
        {label}
      </span>

      {icon && (
        <span className="text-[#6e7681]">
          {icon}
        </span>
      )}
    </div>

    <div className="text-2xl font-semibold tracking-tight text-white">
      {formatNumber(value)}
    </div>
  </div>
);

const LanguageBar = ({
  languages = [],
}) => {
  if (!languages.length) {
    return (
      <p className="text-xs text-[#8b949e]">
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

                <span className="truncate text-[#c9d1d9]">
                  {language.name}
                </span>
              </div>

              <span className="ml-3 text-[#6e7681]">
                {language.count} repos
              </span>
            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-[#21262d]">
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

const RepoCard = ({ repo }) => {
  const color =
    repo.languageColor ||
    LANG_COLORS[repo.language] ||
    LANG_COLORS.default;

  return (
    <Link
      href={repo.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl border border-[#21262d] bg-[#0d1117] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#484f58] hover:bg-[#161b22]"
    >
      <div className="mb-2 flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          <RiGithubFill className="shrink-0 text-[#8b949e]" />

          <span className="truncate text-sm font-semibold text-[#58a6ff] group-hover:underline">
            {repo.repo}
          </span>
        </div>

        <AiOutlineLink className="shrink-0 text-[#6e7681] transition-colors group-hover:text-white" />
      </div>

      <p className="mb-4 line-clamp-2 min-h-[38px] text-xs leading-relaxed text-[#8b949e]">
        {repo.description ||
          "No description provided."}
      </p>

      <div className="flex items-center gap-4 text-[11px] text-[#8b949e]">
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

const LoadingSkeleton = () => (
  <div className="animate-pulse space-y-6">
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="h-24 rounded-xl bg-[#161b22]"
        />
      ))}
    </div>

    <div className="h-[230px] rounded-xl bg-[#161b22]" />

    <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
      <div className="h-48 rounded-xl bg-[#161b22]" />
      <div className="h-48 rounded-xl bg-[#161b22]" />
    </div>
  </div>
);

const GitHubStats = () => {
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
        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-3">
              <RiGithubFill className="text-3xl text-white" />

              <h2 className="text-3xl font-bold text-white">
                GitHub
              </h2>
            </div>

            <p className="text-sm text-[#8b949e]">
              Open source activity, projects and
              contribution history.
            </p>
          </div>

          <Link
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center gap-2 rounded-lg border border-[#30363d] bg-[#0d1117] px-4 py-2 text-xs font-medium text-[#c9d1d9] transition-all hover:border-[#8b949e] hover:text-white"
          >
            <RiGithubFill />
            @{GITHUB_USERNAME}
            <AiOutlineLink />
          </Link>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#30363d] bg-[#0d1117] shadow-2xl">
          {loading ? (
            <div className="p-5 md:p-7">
              <LoadingSkeleton />
            </div>
          ) : data ? (
            <>
              {/* Profile summary */}
              <div className="border-b border-[#21262d] p-5 md:p-7">
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
                      <h3 className="text-base font-semibold text-white">
                        {data.name ||
                          data.username}
                      </h3>

                      <p className="mt-0.5 text-xs text-[#8b949e]">
                        @{data.username}
                      </p>

                      {data.bio && (
                        <p className="mt-2 max-w-xl text-xs text-[#8b949e]">
                          {data.bio}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#8b949e]">
                    <span>
                      <strong className="text-white">
                        {formatNumber(
                          data.followers
                        )}
                      </strong>{" "}
                      followers
                    </span>

                    <span>
                      <strong className="text-white">
                        {formatNumber(
                          data.following
                        )}
                      </strong>{" "}
                      following
                    </span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-px border-b border-[#21262d] bg-[#21262d] md:grid-cols-4">
                <div className="bg-[#0d1117] p-4 md:p-5">
                  <StatCard
                    value={data.repositories}
                    label="Repositories"
                  />
                </div>

                <div className="bg-[#0d1117] p-4 md:p-5">
                  <StatCard
                    value={data.totalStars}
                    label="Total stars"
                    icon={<AiOutlineStar />}
                  />
                </div>

                <div className="bg-[#0d1117] p-4 md:p-5">
                  <StatCard
                    value={data.totalForks}
                    label="Total forks"
                    icon={<AiOutlineFork />}
                  />
                </div>

                <div className="bg-[#0d1117] p-4 md:p-5">
                  <StatCard
                    value={
                      data.contrib?.total
                        ?.total ?? stats.total
                    }
                    label="Contributions"
                  />
                </div>
              </div>

              {/* Contribution graph */}
              <div className="border-b border-[#21262d] p-5 md:p-7">
                <GitHubHeatmap
                  contributions={
                    contributions
                  }
                  total={
                    data.contrib?.total
                      ?.total ?? 0
                  }
                />

                <div className="mt-5 flex flex-wrap gap-3">
                  <div className="rounded-lg border border-[#21262d] bg-[#161b22] px-3 py-2">
                    <span className="block text-[10px] uppercase tracking-wide text-[#6e7681]">
                      Current streak
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {stats.currentStreak} days
                    </span>
                  </div>

                  <div className="rounded-lg border border-[#21262d] bg-[#161b22] px-3 py-2">
                    <span className="block text-[10px] uppercase tracking-wide text-[#6e7681]">
                      Longest streak
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {stats.longestStreak} days
                    </span>
                  </div>

                  {stats.bestDay && (
                    <div className="rounded-lg border border-[#21262d] bg-[#161b22] px-3 py-2">
                      <span className="block text-[10px] uppercase tracking-wide text-[#6e7681]">
                        Best day
                      </span>
                      <span className="text-sm font-semibold text-white">
                        {stats.bestDay.count}{" "}
                        contributions
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Languages + Pinned */}
              <div className="grid lg:grid-cols-[280px_1fr]">
                {/* Languages */}
                <div className="border-b border-[#21262d] p-5 md:p-7 lg:border-b-0 lg:border-r">
                  <div className="mb-5">
                    <h3 className="text-sm font-semibold text-white">
                      Top languages
                    </h3>

                    <p className="mt-1 text-xs text-[#6e7681]">
                      Based on repositories
                    </p>
                  </div>

                  <LanguageBar
                    languages={
                      data.languages || []
                    }
                  />
                </div>

                {/* Pinned */}
                <div className="p-5 md:p-7">
                  <div className="mb-5 flex items-end justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        Featured repositories
                      </h3>

                      <p className="mt-1 text-xs text-[#6e7681]">
                        Selected projects from GitHub
                      </p>
                    </div>

                    <Link
                      href={`${GITHUB_PROFILE}?tab=repositories`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden text-xs text-[#58a6ff] hover:underline sm:block"
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
                          />
                        ))}
                    </div>
                  ) : (
                    <div className="rounded-xl border border-dashed border-[#30363d] p-8 text-center">
                      <RiGithubFill className="mx-auto mb-2 text-2xl text-[#6e7681]" />
                      <p className="text-xs text-[#8b949e]">
                        No pinned repositories.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
              <RiGithubFill className="mb-4 text-5xl text-[#30363d]" />

              <h3 className="text-base font-semibold text-white">
                GitHub data unavailable
              </h3>

              <p className="mt-2 max-w-sm text-xs leading-relaxed text-[#8b949e]">
                GitHub statistics could not be
                loaded right now.
              </p>

              <Link
                href={GITHUB_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 rounded-lg border border-[#30363d] px-4 py-2 text-xs text-[#c9d1d9] transition-colors hover:border-[#8b949e] hover:text-white"
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