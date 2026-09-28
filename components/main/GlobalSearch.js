import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { BLOG_POSTS } from "@/app/constants/blogData";
import {
  HiMagnifyingGlass,
  HiXMark,
  HiArrowRight,
  HiClock,
  HiSparkles,
} from "react-icons/hi2";

/**
 * Global live search.
 *
 * 1. Mount <GlobalSearch /> ONCE (in _app.js or your main layout).
 *    It registers Ctrl/Cmd+K and "/" and renders the search dialog.
 * 2. Put <SearchTrigger /> anywhere you want a button that opens it
 *    (navbar, blog page, etc.).
 */

const OPEN_EVENT = "open-global-search";
const MAX_RESULTS = 8;

export const openGlobalSearch = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(OPEN_EVENT));
  }
};

/* ---------- search index (built once) ---------- */

const bodyText = (post) => {
  const sections = Array.isArray(post.sections)
    ? post.sections
    : Array.isArray(post.content)
    ? post.content
    : [];
  return sections
    .map((s) =>
      [s.title, s.content, ...(Array.isArray(s.bullets) ? s.bullets : [])]
        .filter(Boolean)
        .join(" ")
    )
    .join(" ")
    .toLowerCase();
};

const INDEX = BLOG_POSTS.map((post) => ({
  post,
  title: (post.title || "").toLowerCase(),
  titleJa: (post.titleJa || "").toLowerCase(),
  excerpt: (post.excerpt || "").toLowerCase(),
  category: (post.category || "").toLowerCase(),
  tags: (post.tags || []).map((t) => t.toLowerCase()),
  body: bodyText(post),
}));

const searchPosts = (query) => {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (!terms.length) return [];

  return INDEX.map((entry) => {
    let score = 0;
    for (const t of terms) {
      let s = 0;
      if (entry.title.includes(t)) s += entry.title.startsWith(t) ? 12 : 10;
      if (entry.titleJa.includes(t)) s += 8;
      if (entry.tags.some((tag) => tag.includes(t))) s += 6;
      if (entry.category.includes(t)) s += 5;
      if (entry.excerpt.includes(t)) s += 3;
      if (entry.body.includes(t)) s += 1;
      if (s === 0) return null; // every word must match somewhere
      score += s;
    }
    return { post: entry.post, score };
  })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
    .map((r) => r.post);
};

/* ---------- helpers ---------- */

const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const Highlight = ({ text, terms }) => {
  if (!text || !terms.length) return <>{text}</>;
  const re = new RegExp(`(${terms.map(escapeRegExp).join("|")})`, "gi");
  return (
    <>
      {String(text)
        .split(re)
        .map((part, i) =>
          i % 2 === 1 ? (
            <mark
              key={i}
              className="rounded bg-rose-200/70 dark:bg-rose-500/30 text-inherit px-0.5"
            >
              {part}
            </mark>
          ) : (
            <React.Fragment key={i}>{part}</React.Fragment>
          )
        )}
    </>
  );
};

const isTypingTarget = (el) =>
  el &&
  (el.tagName === "INPUT" ||
    el.tagName === "TEXTAREA" ||
    el.tagName === "SELECT" ||
    el.isContentEditable);

/* ---------- trigger button ---------- */

export const SearchTrigger = ({ variant = "bar", className = "" }) => {
  const [shortcut, setShortcut] = useState("Ctrl K");

  useEffect(() => {
    if (/Mac|iPhone|iPad/.test(navigator.platform)) setShortcut("⌘ K");
  }, []);

  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={openGlobalSearch}
        aria-label="Search articles"
        className={`p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:text-rose-500 dark:hover:text-rose-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${className}`}
      >
        <HiMagnifyingGlass className="text-xl" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={openGlobalSearch}
      className={`w-full flex items-center gap-3 pl-4 pr-3 py-3 rounded-xl text-sm text-left
        bg-white dark:bg-gray-900/60
        border border-gray-200 dark:border-gray-700/50
        text-gray-400 dark:text-gray-500
        hover:border-rose-400 dark:hover:border-rose-500
        focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400
        transition-colors ${className}`}
    >
      <HiMagnifyingGlass className="text-lg shrink-0" />
      <span className="flex-1 truncate">Search articles...</span>
      <kbd className="hidden sm:inline-block px-2 py-0.5 rounded-md text-xs font-mono bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
        {shortcut}
      </kbd>
    </button>
  );
};

/* ---------- the search dialog ---------- */

const GlobalSearch = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => setMounted(true), []);

  // Open via shortcut or custom event
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "/" && !isTypingTarget(e.target)) {
        e.preventDefault();
        setOpen(true);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_EVENT, onOpen);
    };
  }, []);

  // Close on navigation
  useEffect(() => {
    router.events.on("routeChangeStart", close);
    return () => router.events.off("routeChangeStart", close);
  }, [router.events, close]);

  // Focus + scroll lock while open; reset when closed
  useEffect(() => {
    if (!open) {
      setQuery("");
      setActive(0);
      return;
    }
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => inputRef.current?.focus(), 30);
    return () => {
      document.body.style.overflow = prev;
      clearTimeout(t);
    };
  }, [open]);

  const terms = useMemo(
    () => query.trim().toLowerCase().split(/\s+/).filter(Boolean),
    [query]
  );

  const results = useMemo(() => {
    if (!terms.length) {
      const featured = BLOG_POSTS.filter((p) => p.featured);
      const rest = BLOG_POSTS.filter((p) => !p.featured);
      return [...featured, ...rest].slice(0, 5);
    }
    return searchPosts(query).slice(0, MAX_RESULTS);
  }, [query, terms]);

  useEffect(() => setActive(0), [query]);

  useEffect(() => {
    listRef.current
      ?.querySelector(`[data-index="${active}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [active]);

  const go = (post) => {
    if (!post) return;
    close();
    router.push(`/blog/${post.slug}`);
  };

  const onInputKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (results.length ? (i + 1) % results.length : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) =>
        results.length ? (i - 1 + results.length) % results.length : 0
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      go(results[active]);
    } else if (e.key === "Escape") {
      e.preventDefault();
      close();
    }
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="global-search"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[12vh] bg-slate-950/60 backdrop-blur-sm"
          onMouseDown={(e) => e.target === e.currentTarget && close()}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Search articles"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="w-full max-w-2xl overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 shadow-2xl"
          >
            {/* Input */}
            <div className="flex items-center gap-3 px-4 border-b border-gray-100 dark:border-gray-800">
              <HiMagnifyingGlass className="text-xl text-rose-500 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                role="combobox"
                aria-expanded="true"
                aria-controls="global-search-results"
                aria-activedescendant={
                  results[active] ? `search-result-${active}` : undefined
                }
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onInputKeyDown}
                placeholder="Search titles, tags, topics..."
                className="flex-1 py-4 bg-transparent text-base text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none"
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    inputRef.current?.focus();
                  }}
                  aria-label="Clear search"
                  className="p-1 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <HiXMark className="text-lg" />
                </button>
              ) : (
                <kbd className="hidden sm:inline-block px-2 py-0.5 rounded-md text-xs font-mono bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                  Esc
                </kbd>
              )}
            </div>

            {/* Results */}
            <div
              ref={listRef}
              id="global-search-results"
              role="listbox"
              className="max-h-[55vh] overflow-y-auto p-2"
            >
              {!terms.length && (
                <p className="px-3 pt-2 pb-1 text-xs font-semibold text-gray-400 dark:text-gray-500 flex items-center gap-1.5">
                  <HiSparkles className="text-rose-500" />
                  Suggested
                </p>
              )}

              {results.length > 0 ? (
                results.map((post, i) => (
                  <button
                    key={post.id ?? post.slug}
                    id={`search-result-${i}`}
                    data-index={i}
                    role="option"
                    aria-selected={i === active}
                    type="button"
                    onMouseMove={() => active !== i && setActive(i)}
                    onClick={() => go(post)}
                    className={`w-full flex items-start gap-3 p-3 rounded-xl text-left transition-colors ${
                      i === active
                        ? "bg-rose-50 dark:bg-rose-950/40"
                        : "bg-transparent"
                    }`}
                  >
                    <span className="text-2xl leading-none mt-0.5">
                      {post.emoji}
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="flex items-center gap-2">
                        <span className="font-bold text-sm text-gray-900 dark:text-white truncate">
                          <Highlight text={post.title} terms={terms} />
                        </span>
                        <span className="shrink-0 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                          {post.category}
                        </span>
                      </span>
                      {post.titleJa && (
                        <span className="block text-xs italic text-gray-400 dark:text-gray-500 truncate">
                          <Highlight text={post.titleJa} terms={terms} />
                        </span>
                      )}
                      <span className="block mt-1 text-xs text-gray-600 dark:text-gray-400 line-clamp-1">
                        <Highlight text={post.excerpt} terms={terms} />
                      </span>
                      {post.tags?.length > 0 && (
                        <span className="flex flex-wrap items-center gap-1.5 mt-1.5">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] text-gray-500 dark:text-gray-400"
                            >
                              #<Highlight text={tag} terms={terms} />
                            </span>
                          ))}
                          {post.readTime && (
                            <span className="flex items-center gap-1 text-[11px] text-gray-400 dark:text-gray-500">
                              <HiClock /> {post.readTime}
                            </span>
                          )}
                        </span>
                      )}
                    </span>
                    <HiArrowRight
                      className={`mt-1 shrink-0 text-rose-500 transition-opacity ${
                        i === active ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </button>
                ))
              ) : (
                <div className="flex flex-col items-center gap-2 py-12 text-center">
                  <span className="text-4xl">📭</span>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    No articles match &ldquo;{query.trim()}&rdquo;
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Try a tag, a topic like React, or a Japanese title.
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="hidden sm:flex items-center justify-between px-4 py-2.5 border-t border-gray-100 dark:border-gray-800 text-xs text-gray-400 dark:text-gray-500">
              <span>↑ ↓ to move · Enter to open · Esc to close</span>
              {terms.length > 0 && (
                <span>
                  {results.length} result{results.length !== 1 ? "s" : ""}
                </span>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default GlobalSearch;