import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { BLOG_POSTS } from "@/app/constants/blogData";
import BackToTopButton from "@/components/main/BackToTopButton";
import {
  HiArrowLeft,
  HiCalendar,
  HiClock,
  HiTag,
  HiClipboardDocument,
  HiCheck,
  HiShare,
  HiSparkles,
  HiMapPin,
  HiArrowRight,
  HiBookOpen,
  HiEnvelope,
  HiCodeBracket,
} from "react-icons/hi2";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

// Code block with copy button
const CodeSnippet = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-950 shadow-2xl">
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-2 font-mono text-xs text-slate-400 font-semibold uppercase tracking-wider">
            {language || "code"}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <HiCheck className="text-emerald-400 text-sm" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <HiClipboardDocument className="text-slate-400 text-sm" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="p-4 sm:p-5 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed text-slate-200">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const BlogPostDetail = ({ post }) => {
  const router = useRouter();
  const [copiedLink, setCopiedLink] = useState(false);

  if (router.isFallback || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-600 dark:text-slate-400">
        Loading article...
      </div>
    );
  }

  // Find next and previous posts
  const currentIndex = BLOG_POSTS.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? BLOG_POSTS[currentIndex - 1] : null;
  const nextPost =
    currentIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[currentIndex + 1] : null;

  // Related posts from the same category or tags
  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && (p.category === post.category || p.featured)
  ).slice(0, 2);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <>
      <Head>
        <title>{post.title} | Tun Yar Zar Toe Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
      </Head>

      <article className="min-h-screen py-10 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 font-bold hover:text-rose-500 transition-colors"
          >
            <HiArrowLeft className="text-base" />
            <span>Blog</span>
          </Link>
          <span>/</span>
          <span className="text-slate-400 dark:text-slate-500 truncate">
            {post.category}
          </span>
          <span>/</span>
          <span className="text-slate-700 dark:text-slate-300 font-medium truncate max-w-xs">
            {post.title}
          </span>
        </div>

        {/* Hero Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-6 sm:p-10 mb-10 shadow-xl overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-3xl mr-1">{post.emoji}</span>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800/40">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 ml-2">
              <HiCalendar />
              {post.date} ({post.dateJa})
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
              <HiClock />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-3">
            {post.title}
          </h1>

          <p className="text-sm sm:text-base text-rose-600 dark:text-rose-400 font-semibold mb-6 italic">
            {post.titleJa}
          </p>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed pb-6 border-b border-slate-100 dark:border-slate-800/80">
            {post.excerpt}
          </p>

          {/* Author Card & Share */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-rose-500 shadow-md">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-sm text-slate-900 dark:text-white">
                  {post.author.name}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <HiMapPin className="text-rose-500" />
                  {post.author.location} • {post.author.role}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-rose-50 dark:hover:bg-rose-950/40 hover:text-rose-600 transition-colors"
              >
                {copiedLink ? <HiCheck className="text-emerald-500" /> : <HiShare />}
                {copiedLink ? "Link Copied!" : "Share Article"}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Article Body */}
        <div className="space-y-10">
          {post.sections &&
            post.sections.map((section, idx) => (
              <motion.section
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md p-6 sm:p-8 shadow-sm"
              >
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-4 flex items-center gap-2.5">
                  <span className="w-2.5 h-6 rounded-full bg-gradient-to-b from-rose-500 to-pink-500" />
                  {section.title}
                </h2>

                {section.content && (
                  <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line mb-4">
                    {section.content}
                  </p>
                )}

                {section.bullets && section.bullets.length > 0 && (
                  <ul className="space-y-3 my-4">
                    {section.bullets.map((bullet, bIdx) => {
                      const parts = bullet.split("**");
                      return (
                        <li
                          key={bIdx}
                          className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed bg-slate-50/50 dark:bg-slate-800/30 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800"
                        >
                          <span className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-rose-500" />
                          <div>
                            {parts.length >= 3 ? (
                              <>
                                <strong className="text-slate-900 dark:text-white font-bold">
                                  {parts[1]}
                                </strong>
                                <span>{parts.slice(2).join("")}</span>
                              </>
                            ) : (
                              <span>{bullet}</span>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                )}

                {section.codeSnippet && (
                  <CodeSnippet
                    code={section.codeSnippet}
                    language={section.codeLanguage}
                  />
                )}
              </motion.section>
            ))}
        </div>

        {/* Tags */}
        <div className="mt-10 p-6 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2">
          <HiTag className="text-rose-500 text-lg" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">
            Related Tags:
          </span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-xl text-xs font-semibold bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border border-rose-200/50 dark:border-rose-900/50"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Post Navigation: Prev / Next */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.slug}`}
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 hover:border-rose-400 dark:hover:border-rose-500 transition-all group"
            >
              <span className="text-xs font-bold text-slate-400 flex items-center gap-1 mb-1">
                <HiArrowLeft /> Previous Article
              </span>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-rose-500 transition-colors line-clamp-2">
                {prevPost.title}
              </h4>
            </Link>
          ) : <div />}

          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 hover:border-rose-400 dark:hover:border-rose-500 transition-all text-right group"
            >
              <span className="text-xs font-bold text-slate-400 flex items-center justify-end gap-1 mb-1">
                Next Article <HiArrowRight />
              </span>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-rose-500 transition-colors line-clamp-2">
                {nextPost.title}
              </h4>
            </Link>
          ) : <div />}
        </div>

        {/* Recruiter / Collaboration CTA */}
        <div className="mt-12 rounded-3xl p-8 sm:p-10 border border-rose-200 dark:border-rose-900/40 bg-gradient-to-br from-rose-50 via-white to-pink-50 dark:from-rose-950/30 dark:via-slate-900 dark:to-slate-950 shadow-xl text-center">
          <span className="text-4xl mb-3 block">🇯🇵</span>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
            Interested in Discussing Engineering in Tokyo?
          </h3>
          <p className="text-xs text-rose-600 dark:text-rose-400 font-semibold mb-4">
            日本企業での開発業務・採用面談・カジュアル面談のご連絡を歓迎しております
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-lg mx-auto mb-6 leading-relaxed">
            I am actively seeking full-stack software engineer opportunities in Tokyo. Fluent in
            Japanese (JLPT N2) and passionate about React, Next.js, and Java/Spring Boot.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-bold text-sm bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 shadow-lg shadow-rose-500/25 transition-all"
            >
              <HiEnvelope />
              Contact Tun Yar Zar Toe
            </Link>
            <Link
              href="/credentials"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-slate-700 dark:text-slate-300 font-bold text-sm bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all"
            >
              <HiBookOpen />
              View Credentials & JLPT N2
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-lg font-black text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <HiSparkles className="text-rose-500" />
              Related Articles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  href={`/blog/${related.slug}`}
                  className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 hover:border-rose-400 dark:hover:border-rose-500 hover:shadow-lg transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-2xl mb-2 block">{related.emoji}</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-500 mb-1 block">
                      {related.category}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-rose-500 transition-colors mb-2">
                      {related.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                      {related.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-rose-500 mt-4">
                    <span>Read article</span>
                    <HiArrowRight />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      <BackToTopButton />
    </>
  );
};

export async function getStaticPaths() {
  const paths = BLOG_POSTS.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = BLOG_POSTS.find((post) => post.slug === params.slug);

  return {
    props: {
      post: post || null,
    },
  };
}

export default BlogPostDetail;

