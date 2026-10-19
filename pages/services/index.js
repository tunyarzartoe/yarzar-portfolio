import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { useMetadata } from "@/app/metaData";
import BackToTopButton from "@/components/main/BackToTopButton";
import {
  HiSparkles,
  HiArrowRight,
  HiCheck,
  HiCodeBracket,
  HiServer,
  HiCircleStack,
  HiGlobeAlt,
  HiPaintBrush,
  HiCpuChip,
  HiChatBubbleLeftRight,
} from "react-icons/hi2";

const servicesList = [
  {
    id: "frontend",
    title: "Full-Stack Web Engineering",
    icon: <HiCodeBracket className="text-2xl text-rose-500" />,
    badge: "Primary Core",
    subtitle: "React.js • Next.js • TypeScript • Tailwind CSS",
    description:
      "Engineering modern, performant, and scalable web applications from scratch or refactoring legacy interfaces into snappy, SEO-optimized experiences.",
    deliverables: [
      "Responsive, mobile-first single page applications (SPA) & SSR/SSG sites",
      "Interactive state management with Redux Toolkit and React Context",
      "Pixel-perfect translation from Figma designs to accessible component systems",
      "Core Web Vitals optimization and fluid micro-animations",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "backend",
    title: "Backend & RESTful API Architecture",
    icon: <HiServer className="text-2xl text-blue-500" />,
    badge: "Enterprise",
    subtitle: "Java Spring Boot • Node.js • Express • REST APIs",
    description:
      "Designing clean, decoupled server architectures, business logic layers, and secure RESTful endpoints built to scale gracefully under load.",
    deliverables: [
      "Secure authentication and authorization workflows (JWT, OAuth)",
      "Robust RESTful endpoint design with comprehensive validation",
      "Clean MVC and layered architecture following enterprise standards",
      "Third-party API integrations (Payment gateways, weather, analytics)",
    ],
    tech: ["Java", "Spring Boot", "Node.js", "Express", "REST APIs"],
  },
  {
    id: "database",
    title: "Database Modeling & Query Optimization",
    icon: <HiCircleStack className="text-2xl text-amber-500" />,
    badge: "Data Layer",
    subtitle: "MySQL • PostgreSQL • MongoDB • Schema Design",
    description:
      "Crafting relational and NoSQL database schemas with high normalization standards, query performance tuning, and bulletproof indexing strategies.",
    deliverables: [
      "Relational schema modeling, foreign key constraints & migrations",
      "Complex SQL queries, joins, transactions, and indexing",
      "NoSQL document structures tailored for rapid read/write throughput",
      "Data sanitation and ORM/Query builder integration (Hibernate, Prisma)",
    ],
    tech: ["MySQL", "PostgreSQL", "MongoDB", "SQL Optimization"],
  },
  {
    id: "bilingual",
    title: "Bilingual IT & Bridge Collaboration",
    icon: <HiGlobeAlt className="text-2xl text-emerald-500" />,
    badge: "JLPT N2 Certified",
    subtitle: "Japanese (N2) • English (Fluent) • Technical Translation",
    description:
      "Bridging international engineering teams with Japanese stakeholders. Delivering bilingual technical documentation, sprint planning, and specification reviews.",
    deliverables: [
      "Bilingual code reviews, architecture notes, and user manual translation",
      "Smooth stakeholder alignment in Japanese-speaking work environments",
      "Cross-border team coordination (Myanmar, Singapore, Japan)",
      "Understanding of Japanese business etiquette and development workflows",
    ],
    tech: ["JLPT N2", "Technical Japanese", "Documentation", "Bilingual Agile"],
  },
  {
    id: "uiux",
    title: "Modern UI/UX Systems & Prototyping",
    icon: <HiPaintBrush className="text-2xl text-purple-500" />,
    badge: "Design to Code",
    subtitle: "Figma • Cyber-Minimalism • Design Tokens",
    description:
      "Bridging the gap between design vision and production frontend code with reusable token systems, glassmorphism aesthetics, and intuitive interactions.",
    deliverables: [
      "Consistent color systems, dark/light mode themes, and typography scales",
      "Interactive component libraries with high accessibility standards",
      "Micro-interactions and subtle glow physics that captivate users",
      "Rapid high-fidelity interactive wireframes and UX flows",
    ],
    tech: ["Figma", "Design Systems", "Dark / Light Mode", "Glassmorphism"],
  },
  {
    id: "optimization",
    title: "Performance Audits & Code Refactoring",
    icon: <HiCpuChip className="text-2xl text-cyan-500" />,
    badge: "Quality & Speed",
    subtitle: "Core Web Vitals • Clean Code • Bug Resolution",
    description:
      "Diagnosing sluggish bottlenecks, bundle bloat, and architectural debt to transform complex legacy codebases into clean, maintainable systems.",
    deliverables: [
      "Lighthouse 95+ performance, accessibility, and SEO tuning",
      "Bundle size splitting, lazy loading, and dynamic import architecture",
      "Rigorous bug hunting and edge-case resolution",
      "Version control workflows and Git hygiene",
    ],
    tech: ["Lighthouse", "Webpack / Vite", "Git CI/CD", "Clean Architecture"],
  },
];

const workflowSteps = [
  {
    num: "01",
    title: "Discovery & Analysis",
    description: "Clarifying business objectives, requirements, tech stack constraints, and technical scope.",
  },
  {
    num: "02",
    title: "Architecture & Design",
    description: "Designing the database schemas, API contracts, UI component hierarchy, and data pipelines.",
  },
  {
    num: "03",
    title: "Agile Implementation",
    description: "Writing testable, clean code with modular commits, frequent status check-ins, and demo releases.",
  },
  {
    num: "04",
    title: "Review & Deployment",
    description: "Rigorous responsive testing, performance benchmarking, and seamless deployment to cloud hosting.",
  },
];

const Services = () => {
  const metadata = useMetadata();

  return (
    <>
      <Head>
        <title>Engineering Services & Capabilities | Tun Yar Zar Toe</title>
        {metadata.icon && <link rel="icon" href={metadata.icon.src} />}
      </Head>

      <section className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        {/* Header Hero */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 dark:bg-rose-500/15 border border-red-500/20 text-red-600 dark:text-rose-400 text-xs sm:text-sm font-semibold mb-4">
            <HiSparkles className="animate-spin-slow" />
            <span>Technical Capabilities & Deliverables</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            High-Impact Engineering <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-500 to-amber-500">
              Services & Capabilities
            </span>
          </h1>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            From modern responsive web applications to resilient backend APIs and bilingual collaboration in Tokyo, I deliver robust software crafted with precision.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
            <div className="p-3 sm:p-4 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-sm">
              <div className="text-xl sm:text-2xl font-black text-secondary">3+ Years</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Production Experience</div>
            </div>
            <div className="p-3 sm:p-4 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-sm">
              <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">Full-Stack</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">React + Java/Node</div>
            </div>
            <div className="p-3 sm:p-4 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-sm">
              <div className="text-xl sm:text-2xl font-black text-rose-500">JLPT N2</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Bilingual Workplace</div>
            </div>
            <div className="p-3 sm:p-4 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-sm">
              <div className="text-xl sm:text-2xl font-black text-emerald-500">100%</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Clean & Scalable Code</div>
            </div>
          </div>
        </motion.div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {servicesList.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className="group relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-white/95 via-slate-50/90 to-white/95 dark:bg-gradient-to-br dark:from-slate-900/95 dark:via-[#0f172a]/90 dark:to-slate-950/95 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xl shadow-lg shadow-slate-200/50 dark:shadow-2xl dark:shadow-black/60 hover:shadow-xl hover:border-red-500/40 dark:hover:border-rose-500/40 transition-all duration-300"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/60">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-secondary transition-colors mb-1">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold text-rose-600 dark:text-rose-400 mb-3">
                  {service.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2 mb-6">
                  {service.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <HiCheck className="text-emerald-500 flex-shrink-0 mt-0.5 text-sm" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tech Pills */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-1.5">
                {service.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded-lg text-[11px] font-medium bg-slate-100 dark:bg-slate-800/70 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Engineering Methodology Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-white/95 via-slate-50/90 to-white/95 dark:bg-gradient-to-br dark:from-slate-900/95 dark:via-[#0f172a]/90 dark:to-slate-950/95 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xl shadow-xl mb-16"
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-secondary uppercase tracking-widest block mb-2">
              How I Work
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              End-to-End Engineering Methodology
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
              A structured and transparent approach ensuring on-time delivery and clean architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step, sIdx) => (
              <div
                key={sIdx}
                className="relative p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60"
              >
                <div className="text-3xl font-black text-secondary/30 dark:text-rose-500/30 mb-2">
                  {step.num}
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden p-8 sm:p-12 text-center bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white shadow-2xl shadow-rose-500/20"
        >
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
              Ready to Discuss a Role or Collaboration?
            </h2>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed">
              Whether you are hiring for a software engineering position in Tokyo or looking for a full-stack engineer to build your next web application, let&apos;s connect.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-slate-900 font-bold text-sm bg-white hover:bg-slate-100 shadow-lg hover:scale-105 transition-all"
              >
                <HiChatBubbleLeftRight className="text-secondary text-base" />
                <span>Get in Touch</span>
                <HiArrowRight className="text-xs" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-bold text-sm bg-black/25 hover:bg-black/40 border border-white/20 transition-all"
              >
                <span>View Shipped Projects</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <BackToTopButton />
    </>
  );
};

export default Services;
