import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useMetadata } from "@/app/metaData";
import { BLOG_POSTS } from "@/app/constants/blogData";
import BackToTopButton from "@/components/main/BackToTopButton";
import GlobalSearch, { SearchTrigger } from "@/components/main/GlobalSearch";
import {
  HiPencilSquare,
  HiTag,
  HiCalendar,
  HiClock,
  HiArrowRight,
  HiBookOpen,
  HiCodeBracket,
  HiGlobeAlt,
  HiSparkles,
  HiRocketLaunch,
  HiCpuChip,
} from "react-icons/hi2";
import {
  FaReact,
  FaJava,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiSpringboot,
} from "react-icons/si";

const CATEGORIES = [
  { id: "all", label: "All Posts", icon: <HiBookOpen /> },
  { id: "Next.js", label: "Next.js", icon: <SiNextdotjs /> },
  { id: "React", label: "React", icon: <FaReact /> },
  { id: "TypeScript", label: "TypeScript", icon: <SiTypescript /> },
  { id: "Java", label: "Java", icon: <FaJava /> },
  { id: "Node.js", label: "Node.js", icon: <FaNodeJs /> },
  { id: "Japanese", label: "Japanese", icon: <HiGlobeAlt /> },
  { id: "CSS", label: "CSS / UI", icon: <HiSparkles /> },
  { id: "DevOps", label: "DevOps", icon: <HiCpuChip /> },
];

const STATS = [
  { label: "Articles", value: BLOG_POSTS.length, icon: <HiPencilSquare /> },
  { label: "Topics Covered", value: "8+", icon: <HiTag /> },
  { label: "Reading Hours", value: "2h+", icon: <HiClock /> },
  { label: "Languages", value: "EN / JA", icon: <HiGlobeAlt /> },
];

const formatDate = (dateStr) => {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const getCategoryColor = (category) => {
  const map = {
    "Next.js":
      "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
    React:
      "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300",
    TypeScript:
      "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    Java: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
    "Node.js":
      "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    Japanese:
      "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
    CSS: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
    DevOps:
      "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  };
  return (
    map[category] ||
    "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
  );
};

const BlogCard = ({ post, index, featured = false }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ delay: index * 0.07, duration: 0.4 }}
    className={`group relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-300
      bg-white dark:bg-gray-900/60
      border-gray-200 dark:border-gray-700/50
      hover:border-rose-400/50 dark:hover:border-rose-500/40
      hover:shadow-xl hover:shadow-rose-500/10 dark:hover:shadow-rose-500/10
      ${featured ? "md:col-span-2" : ""}
    `}
  >
    <div
      className={`h-1.5 w-full bg-gradient-to-r ${post.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}
    />

    <div className={`flex flex-col ${featured ? "md:flex-row" : ""} flex-1`}>
      <div
        className={`flex items-center justify-center
        ${featured ? "md:w-48 min-h-[120px]" : "min-h-[80px]"}
        bg-gradient-to-br ${post.gradient} text-4xl text-white
      `}
      >
        <span className="text-5xl drop-shadow-lg">{post.emoji}</span>
      </div>

      <div className="flex flex-col flex-1 p-5 sm:p-6 gap-3">
        <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <span
            className={`px-2.5 py-1 rounded-full font-semibold text-xs ${getCategoryColor(
              post.category
            )}`}
          >
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <HiCalendar className="text-sm" />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1">
            <HiClock className="text-sm" />
            {post.readTime}
          </span>
          {featured && (
            <span className="ml-auto flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-100 text-rose-600 dark:bg-rose-900/40 dark:text-rose-400 font-semibold text-xs">
              <HiSparkles className="text-sm" />
              Featured
            </span>
          )}
        </div>

        <div>
          <Link href={`/blog/${post.slug}`}>
            <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white leading-snug group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors">
              {post.title}
            </h2>
          </Link>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5 italic">
            {post.titleJa}
          </p>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-gray-100 dark:border-gray-800">
          <div className="flex flex-wrap gap-1.5">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded text-xs bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
              >
                #{tag}
              </span>
            ))}
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="flex items-center gap-1 text-sm font-semibold text-rose-500 hover:text-rose-600 dark:text-rose-400 dark:hover:text-rose-300 transition-colors group/link"
          >
            Read more
            <HiArrowRight className="text-base group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  </motion.article>
);

const BlogPage = () => {
  const metadata = useMetadata();
  const [activeCategory, setActiveCategory] = useState("all");

  // Category filter only — text search is handled by <GlobalSearch />
  const filtered = BLOG_POSTS.filter(
    (post) => activeCategory === "all" || post.category === activeCategory
  );

  const featured = filtered.filter((p) => p.featured);
  const regular = filtered.filter((p) => !p.featured);

  return (
    <>
      <Head>
        <title>Blog | Tun Yar Zar Toe — Software Engineering & Japan Tech</title>
        {metadata.icon && <link rel="icon" href={metadata.icon.src} />}
        <meta
          name="description"
          content="Articles on React, Next.js, Java, TypeScript, and software engineering in Japan by Tun Yar Zar Toe."
        />
      </Head>

      <section className="min-h-screen py-8 sm:py-14 px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-14"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold
            bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400
            border border-rose-200 dark:border-rose-800/50 mb-5"
          >
            <HiPencilSquare className="text-sm" />
            Software Engineering Blog
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-3 leading-tight">
            Tech{" "}
            <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
              Articles
            </span>
          </h1>
          <p className="text-sm text-gray-400 dark:text-gray-500 font-medium mb-1">
            テックブログ | Software Engineering & Japan Career
          </p>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
            Sharing what I learn as a full-stack engineer studying in Tokyo —
            React, Next.js, Java, TypeScript, and navigating the Japanese tech
            industry.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-2 px-4 py-2 rounded-xl
                  bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700/50"
              >
                <span className="text-rose-500 dark:text-rose-400 text-lg">
                  {stat.icon}
                </span>
                <div>
                  <div className="text-lg font-black text-gray-900 dark:text-white leading-none">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="mb-8 space-y-4"
        >
          {/* Opens the global live search (also Ctrl/Cmd + K or "/") */}
          <SearchTrigger className="max-w-md" />

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200
                  ${
                    activeCategory === cat.id
                      ? "bg-rose-500 text-white shadow-lg shadow-rose-500/25"
                      : "bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700/50 text-gray-600 dark:text-gray-400 hover:border-rose-400/50 dark:hover:border-rose-500/40"
                  }`}
              >
                <span className="text-base">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>

          {activeCategory !== "all" && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {filtered.length} article{filtered.length !== 1 ? "s" : ""} found
              in {activeCategory}
            </p>
          )}
        </motion.div>

        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {featured.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-rose-500 dark:text-rose-400 mb-4 flex items-center gap-2">
                    <HiSparkles /> Featured
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {featured.map((post, i) => (
                      <BlogCard key={post.id} post={post} index={i} featured />
                    ))}
                  </div>
                </div>
              )}

              {regular.length > 0 && (
                <div>
                  {featured.length > 0 && (
                    <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4 flex items-center gap-2">
                      <HiCodeBracket /> All Articles
                    </h2>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {regular.map((post, i) => (
                      <BlogCard key={post.id} post={post} index={i} />
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-24 gap-4 text-center"
            >
              <div className="text-6xl">📭</div>
              <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300">
                No articles found
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Try a different category.
              </p>
              <button
                onClick={() => setActiveCategory("all")}
                className="mt-2 px-5 py-2.5 rounded-xl bg-rose-500 text-white text-sm font-semibold hover:bg-rose-600 transition-colors"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-2xl overflow-hidden border border-rose-200/50 dark:border-rose-800/30
            bg-gradient-to-br from-rose-50 via-white to-pink-50
            dark:from-rose-950/20 dark:via-gray-900 dark:to-pink-950/20 p-8 sm:p-10 text-center"
        >
          <div className="text-4xl mb-4">✉️</div>
          <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-2">
            Want to Connect?
          </h2>
          <p className="text-sm text-gray-400 dark:text-gray-500 mb-1">
            フィードバック・質問・コラボレーション
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 max-w-md mx-auto">
            Have a question about an article, want to collaborate on a project, or
            interested in hiring me as a software engineer in Japan?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-semibold text-sm transition-colors shadow-lg shadow-rose-500/25"
            >
              <HiRocketLaunch />
              Get in Touch
            </Link>
            <a
              href="https://github.com/TunYarzarToe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold text-sm hover:border-rose-400/50 dark:hover:border-rose-500/40 transition-colors"
            >
              GitHub Profile
            </a>
          </div>
        </motion.div>
      </section>

      <GlobalSearch />
      <BackToTopButton />
    </>
  );
};

export default BlogPage;