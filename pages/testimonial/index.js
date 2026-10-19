import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { useMetadata } from "@/app/metaData";
import BackToTopButton from "@/components/main/BackToTopButton";
import {
  HiSparkles,
  HiStar,
  HiCheckBadge,
  HiChatBubbleBottomCenterText,
  HiArrowRight,
  HiBuildingOffice2,
  HiAcademicCap,
  HiGlobeAlt,
} from "react-icons/hi2";
import { FaLinkedin, FaQuoteLeft } from "react-icons/fa";

const testimonialsList = [
  {
    id: 1,
    name: "Engineering Team Lead",
    role: "Senior Full-Stack Lead",
    company: "Kumo Solutions",
    location: "Mandalay / Remote",
    category: "commercial",
    relationship: "Direct Supervisor on Client Web Apps",
    highlight: "Exceptional frontend delivery and rapid problem-solving",
    quote:
      "Tun Yar Zar is an exceptionally dependable engineer. During our client web application builds, he consistently took complex UI requirements and turned them into clean, high-performance React components ahead of schedule. His curiosity and eagerness to solve difficult bugs make him an asset to any software team.",
    skills: ["React.js", "Redux", "Component Architecture", "Agile Sprints"],
    stars: 5,
  },
  {
    id: 2,
    name: "Analytics Project Manager",
    role: "Product Lead",
    company: "Evercomm Singapore",
    location: "Singapore / Regional",
    category: "commercial",
    relationship: "Cross-Functional Project Stakeholder",
    highlight: "Clear communication & robust REST API integrations",
    quote:
      "Working with Tun Yar Zar on energy management dashboards was a seamless experience. He understands how to structure API contracts, transform complex time-series data into intuitive data visualizations, and work effectively in distributed international teams.",
    skills: ["Data Visualization", "REST APIs", "Dashboard UI", "Collaboration"],
    stars: 5,
  },
  {
    id: 3,
    name: "IT Department Faculty",
    role: "Professor & Academic Supervisor",
    company: "東京ITプログラミング＆会計専門学校",
    location: "Tokyo, Japan",
    category: "academic",
    relationship: "Academic Instructor & Mentor",
    highlight: "Bilingual diligence & mastery of JLPT N2 Japanese",
    quote:
      "屯さんはプログラミング技術だけでなく、日本語の習得に対しても極めて熱心で優秀な学生です。短期間でJLPT N2を取得し、日本の商習慣やチーム開発の規律を深く理解しています。日本国内のIT開発現場でも即戦力として大いに活躍できると確信しております。",
    skills: ["JLPT N2 合格", "Java / Spring Boot", "Database Design", "勤勉性・協調性"],
    stars: 5,
  },
  {
    id: 4,
    name: "Senior Software Colleague",
    role: "Frontend Engineer",
    company: "Collaborative Open Source",
    location: "Tokyo, Japan",
    category: "peer",
    relationship: "Pair Programming & Project Peer",
    highlight: "Obsessed with clean code and modern cyber-minimalist UX",
    quote:
      "Tun Yar Zar has a rare talent for pairing strong backend fundamentals with top-tier aesthetic design. His attention to detail in micro-interactions, dark/light themes, and responsive layouts makes working with him an absolute pleasure.",
    skills: ["Next.js", "Tailwind CSS", "Framer Motion", "UI Systems"],
    stars: 5,
  },
];

const Testimonials = () => {
  const metadata = useMetadata();
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Endorsements" },
    { id: "commercial", label: "Industry & Commercial" },
    { id: "academic", label: "Academic & Japanese Mentors" },
    { id: "peer", label: "Engineering Peers" },
  ];

  const filteredTestimonials = testimonialsList.filter((item) => {
    if (filter === "all") return true;
    return item.category === filter;
  });

  return (
    <>
      <Head>
        <title>Recommendations & Endorsements | Tun Yar Zar Toe</title>
        {metadata.icon && <link rel="icon" href={metadata.icon.src} />}
      </Head>

      <section className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        {/* Header Hero */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 dark:bg-rose-500/15 border border-red-500/20 text-red-600 dark:text-rose-400 text-xs sm:text-sm font-semibold mb-4">
            <HiSparkles className="animate-spin-slow" />
            <span>Verified Peer Reviews & Endorsements</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            Colleague Recommendations <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-500 to-amber-500">
              & Professional Trust
            </span>
          </h1>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Direct perspectives from team leads, project managers, and Tokyo academic mentors regarding work ethic, technical problem solving, and bilingual collaboration.
          </p>

          {/* Quick Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  filter === cat.id
                    ? "bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-md shadow-rose-500/25"
                    : "bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-slate-700/80 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {filteredTestimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-white/95 via-slate-50/90 to-white/95 dark:bg-gradient-to-br dark:from-slate-900/95 dark:via-[#0f172a]/90 dark:to-slate-950/95 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xl shadow-lg shadow-slate-200/50 dark:shadow-2xl dark:shadow-black/60 hover:shadow-xl hover:border-red-500/40 dark:hover:border-rose-500/40 transition-all duration-300"
            >
              <div>
                {/* Header row: stars & quote icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400 text-sm">
                    {[...Array(item.stars)].map((_, sIdx) => (
                      <HiStar key={sIdx} className="fill-amber-400" />
                    ))}
                  </div>
                  <FaQuoteLeft className="text-2xl text-slate-200 dark:text-slate-800" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  &ldquo;{item.highlight}&rdquo;
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic mb-6">
                  {item.quote}
                </p>

                {/* Skills mentioned */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>{item.name}</span>
                    <HiCheckBadge className="text-rose-500 text-sm" title="Verified Colleague" />
                  </h4>
                  <p className="text-xs text-secondary font-medium">
                    {item.role} • {item.company}
                  </p>
                  <p className="text-[11px] text-slate-400 dark:text-slate-500">
                    {item.location} ({item.relationship})
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Japanese Recruiter Note Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-red-500/5 via-rose-500/10 to-amber-500/5 dark:from-red-950/20 dark:via-rose-950/30 dark:to-slate-950 border border-red-500/20 dark:border-red-500/30 backdrop-blur-xl mb-16 text-center"
        >
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white dark:bg-slate-800 text-secondary border border-red-200 dark:border-red-900/50">
              <HiGlobeAlt />
              <span>採用担当者様向けリファレンス</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              リファレンスチェック・推薦状のご案内
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              選考過程における過去のプロジェクト成果物、専門学校での成績証明書、および前職での実績詳細についてのご質問は、面談時またはメールにていつでも開示可能です。
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white font-bold text-xs sm:text-sm bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 shadow-md shadow-rose-500/25 transition-all"
              >
                <HiChatBubbleBottomCenterText />
                <span>面談・選考のご連絡はこちら</span>
                <HiArrowRight />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <BackToTopButton />
    </>
  );
};

export default Testimonials;
