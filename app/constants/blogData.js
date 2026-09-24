export const BLOG_POSTS = [
  {
    id: 1,
    slug: "getting-started-nextjs-japan",
    title: "Building a Portfolio for Japan Job Hunting with Next.js",
    titleJa: "Next.jsで日本就活ポートフォリオを作る：採用担当者の心をつかむ設計",
    excerpt:
      "A deep dive into how I built this portfolio specifically optimized for Japanese tech recruiters — from JLPT N2 highlights to 履歴書 (CV) downloads and Japanese UI patterns.",
    category: "Next.js",
    tags: ["Next.js", "React", "Japan", "Portfolio", "Career"],
    readTime: "8 min read",
    date: "2026-09-10",
    dateJa: "2026年9月10日",
    emoji: "🇯🇵",
    gradient: "from-slate-700 to-slate-900",
    featured: true,
    author: {
      name: "Tun Yar Zar Toe",
      role: "Full-Stack Engineer & Tokyo IT Student",
      avatar: "/new_profile.jpeg",
      location: "Tokyo, Japan 🇯🇵",
    },
    sections: [
      {
        title: "Introduction: Why Standard Portfolios Fail in Japan",
        content: `When hunting for software engineering roles in Japan as a foreign developer, generic English-only portfolios often fail to pass the initial screening. Japanese hiring managers and HR personnel look for specific criteria: proof of Japanese language competence (JLPT certifications), understanding of Japanese business communication (報連相 - Horenso), and easily downloadable Japanese-format resumes (履歴書 / 職務経歴書).

In this article, I share the architectural and UI decisions behind this portfolio built with Next.js 14 and Tailwind CSS.`,
      },
      {
        title: "Key Recruiter Features to Include",
        content: `To maximize recruiter conversion, your portfolio should include the following core sections:`,
        bullets: [
          "**One-Click 履歴書 (CV) Download**: Japanese recruiters often need to save and share PDF documents internally with engineering leads.",
          "**JLPT N2 & Language Competence Pill**: Clearly show Japanese listening, speaking, reading, and technical specification comprehension level.",
          "**自己PR (Self-PR) & 志望動機 (Motivation)**: Dedicated sections explaining your technical strengths and why you want to contribute to engineering teams in Japan.",
          "**Tech Stack & Live Demos**: Production-grade interactive UI with real working links and GitHub repositories.",
          "**Direct Japanese Contact**: Japanese phone number format (e.g. 070-XXXX-XXXX) and Tokyo residency details.",
        ],
      },
      {
        title: "Implementation: Bilingual Meta & Route Architecture",
        content: `Using Next.js App and Pages router, we can structure clean, SEO-friendly metadata and static generation (SSG) for ultra-fast load speeds in Japan.`,
        codeLanguage: "typescript",
        codeSnippet: `// pages/blog/[slug]/index.js - Next.js SSG for lightning-fast delivery
export async function getStaticPaths() {
  const paths = BLOG_POSTS.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  return { props: { post } };
}`,
      },
      {
        title: "Japanese Engineering Terms to Integrate",
        content: `When presenting your projects, use authentic Japanese development terms to demonstrate real-world fluency:`,
        bullets: [
          "**要件定義 (Youken Teigi)**: Requirements definition and specification analysis.",
          "**基本設計 / 詳細設計 (Sekkei)**: Architecture and detailed component design.",
          "**フロントエンド / バックエンド開発 (Kaihatsu)**: Full-stack implementation.",
          "**単体テスト / 結合テスト (Test)**: Unit testing and integration testing.",
          "**コードレビュー & 報連相 (Horenso)**: Collaborative reviews, reporting, contacting, and consulting.",
        ],
      },
      {
        title: "Conclusion & Key Takeaways",
        content: `Optimizing a portfolio for Japan isn't just about translating words — it's about respecting the hiring workflow of Japanese companies. Combining fast Next.js static pages with clear Japanese qualifications ensures your skills stand out to both HR recruiters and technical CTOs.`,
      },
    ],
  },
  {
    id: 2,
    slug: "jlpt-n2-tech-vocabulary",
    title: "JLPT N2 Tech Vocabulary for Software Engineers",
    titleJa: "エンジニアのためのJLPT N2技術語彙まとめ：現場で使える実践日本語",
    excerpt:
      "Essential Japanese technical terms every software engineer working in Japan needs to know — from 要件定義 (requirements definition) to 報連相 (reporting, contacting, consulting).",
    category: "Japanese",
    tags: ["Japanese", "JLPT", "Career", "Japan", "Engineering"],
    readTime: "6 min read",
    date: "2026-08-28",
    dateJa: "2026年8月28日",
    emoji: "📚",
    gradient: "from-blue-700 to-blue-900",
    featured: true,
    author: {
      name: "Tun Yar Zar Toe",
      role: "Full-Stack Engineer & Tokyo IT Student",
      avatar: "/new_profile.jpeg",
      location: "Tokyo, Japan 🇯🇵",
    },
    sections: [
      {
        title: "Why Technical Japanese is Essential for Engineers",
        content: `Passing the JLPT N2 (Japanese Language Proficiency Test) proves business-level reading and listening skills. However, working in a Japanese development team requires specialized IT vocabulary that isn't typically tested on standard textbooks.

Here is a curated guide of high-frequency engineering terms used in daily standups, specification docs, and code reviews in Tokyo.`,
      },
      {
        title: "1. Software Development Lifecycle (開発工程)",
        bullets: [
          "**要件定義（ようけんていぎ / Youken Teigi）**: Requirements definition. Clarifying what the client or business needs.",
          "**基本設計（きほんせっけい / Kihon Sekkei）**: High-level design (UI/UX wireframes, system architecture, database schema).",
          "**詳細設計（しょうさいせっけい / Shousai Sekkei）**: Detailed design (class diagrams, API payload specs, algorithm flow).",
          "**実装（じっそう / Jissou）**: Implementation / Coding. Writing clean, maintainable code.",
          "**単体テスト（たんたいてすと / Tantai Test）**: Unit testing (e.g. Jest, JUnit).",
          "**結合テスト（けつごうてすと / Ketsugou Test）**: Integration testing.",
          "**本番環境（ほんばんかんきょう / Honban Kankyou）**: Production environment.",
        ],
      },
      {
        title: "2. Daily Team Communication & Horenso (チームコミュニケーション)",
        content: `Effective teamwork in Japan centers on the **報連相 (ほうれんそう / Horenso)** principle:`,
        bullets: [
          "**報告（ほうこく / Houkoku）**: Reporting progress, milestone completions, or completed tasks.",
          "**連絡（れんらく / Renraku）**: Contacting team members about schedules, delays, or dependencies.",
          "**相談（そうだん / Soudan）**: Consulting seniors or tech leads when blocked or facing architectural trade-offs.",
          "**プルリクエスト（Pull Request）**: Submitting code for peer review.",
          "**マージ（Merge）**: Integrating code into the main/develop branch.",
          "**デグレ / 先祖返り（Degradation / Regression）**: A regression bug caused by overwriting newer code.",
        ],
      },
      {
        title: "3. Common Phrases in Daily Standups (朝会の頻出フレーズ)",
        codeLanguage: "text",
        codeSnippet: `// Example Japanese Standup Update:
「昨日はユーザー認証APIの実装と単体テストを完了しました。」
(Yesterday I completed the user authentication API implementation and unit tests.)

「本日はフロントエンドとの結合テストとバグ修正を進める予定です。」
(Today I plan to proceed with front-end integration testing and bug fixes.)

「現在、外部決済APIの仕様に関して確認事項があるため、後ほど田中さんに相談させてください。」
(Currently, I have a question regarding external payment API specs, so I'd like to consult Tanaka-san later.)`,
      },
      {
        title: "Summary",
        content: `Mastering both JLPT N2 grammar and engineering vocabulary bridges the gap between language theory and real production contributions in Japanese tech companies.`,
      },
    ],
  },
  {
    id: 3,
    slug: "react-hooks-deep-dive",
    title: "React Hooks Deep Dive: useCallback, useMemo & useRef",
    titleJa: "Reactフック深堀り：useCallback、useMemo、useRefの使い分けと最適化",
    excerpt:
      "Understanding when and why to use React's performance hooks. Real-world examples from production code with before/after performance comparisons.",
    category: "React",
    tags: ["React", "JavaScript", "Performance", "Frontend"],
    readTime: "12 min read",
    date: "2026-08-15",
    dateJa: "2026年8月15日",
    emoji: "⚛️",
    gradient: "from-cyan-700 to-cyan-900",
    featured: false,
    author: {
      name: "Tun Yar Zar Toe",
      role: "Full-Stack Engineer & Tokyo IT Student",
      avatar: "/new_profile.jpeg",
      location: "Tokyo, Japan 🇯🇵",
    },
    sections: [
      {
        title: "The Problem: Unnecessary Re-renders",
        content: `In modern React applications, components re-render whenever their state changes or their parent re-renders. While React is fast, heavy computations, complex SVG charts, or deeply nested lists can cause noticeable UI frame drops if re-evaluated unnecessarily.

React provides three key optimization hooks: **useMemo**, **useCallback**, and **useRef**. Let's examine when to use each.`,
      },
      {
        title: "1. useMemo: Caching Expensive Computations",
        content: `useMemo memoizes the *result* of a calculation between renders:`,
        codeLanguage: "javascript",
        codeSnippet: `// Before: Filters thousands of items on EVERY parent re-render
const filteredData = bigDataset.filter(item => item.category === selectedCategory);

// After: Only re-calculates when bigDataset or selectedCategory changes
const filteredData = useMemo(() => {
  return bigDataset.filter(item => item.category === selectedCategory);
}, [bigDataset, selectedCategory]);`,
      },
      {
        title: "2. useCallback: Stabilizing Callback References",
        content: `In JavaScript, \`() => {}\` creates a new function reference every render. Passing inline functions to children wrapped in \`React.memo\` breaks child memoization. useCallback preserves the exact function instance:`,
        codeLanguage: "javascript",
        codeSnippet: `// Stabilizes function reference for memoized child component
const handleSelectProject = useCallback((projectId) => {
  setActiveProject(projectId);
  trackAnalytics("project_click", projectId);
}, []); // Empty deps = stable across component lifecycle`,
      },
      {
        title: "3. useRef: Preserving Values Without Triggering Renders",
        content: `useRef holds a mutable \`.current\` property that survives re-renders without causing a component re-render when mutated. Perfect for timer IDs, previous state references, or direct DOM access.`,
        codeLanguage: "javascript",
        codeSnippet: `const searchInputRef = useRef(null);
const debounceTimerRef = useRef(null);

const handleSearch = (query) => {
  if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
  debounceTimerRef.current = setTimeout(() => {
    fetchResults(query);
  }, 300);
};`,
      },
      {
        title: "Key Takeaways & Best Practices",
        bullets: [
          "Don't prematurely optimize: profile first using React DevTools Profiler.",
          "Always pair useCallback with `React.memo` on the child component.",
          "Keep dependency arrays accurate to prevent stale closure bugs.",
        ],
      },
    ],
  },
  {
    id: 4,
    slug: "spring-boot-rest-api",
    title: "Spring Boot REST API Best Practices",
    titleJa: "Spring Boot RESTful APIのベストプラクティス：保守性の高いバックエンド設計",
    excerpt:
      "Building production-ready REST APIs with Spring Boot — covering error handling, validation, JWT authentication, and database transaction management.",
    category: "Java",
    tags: ["Java", "Spring Boot", "Backend", "API", "MySQL"],
    readTime: "15 min read",
    date: "2026-07-22",
    dateJa: "2026年7月22日",
    emoji: "🍃",
    gradient: "from-green-700 to-green-900",
    featured: false,
    author: {
      name: "Tun Yar Zar Toe",
      role: "Full-Stack Engineer & Tokyo IT Student",
      avatar: "/new_profile.jpeg",
      location: "Tokyo, Japan 🇯🇵",
    },
    sections: [
      {
        title: "Layered Architecture in Enterprise Java",
        content: `Spring Boot is widely utilized across Japanese enterprise systems and modern web startups. Maintaining clean boundaries between the Controller, Service, and Repository layers is crucial for testability and scalability.`,
      },
      {
        title: "1. Global Exception Handling with @RestControllerAdvice",
        content: `Instead of cluttered try-catch blocks in controllers, use a centralized error handler:`,
        codeLanguage: "java",
        codeSnippet: `@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ApiResponse<Void>> handleNotFound(ResourceNotFoundException ex) {
        ApiResponse<Void> response = new ApiResponse<>(
            HttpStatus.NOT_FOUND.value(),
            ex.getMessage(),
            null
        );
        return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiResponse<Map<String, String>>> handleValidation(
        MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getFieldErrors().forEach(error -> 
            errors.put(error.getField(), error.getDefaultMessage()));
        
        return ResponseEntity.badRequest().body(
            new ApiResponse<>(400, "Validation failed", errors)
        );
    }
}`,
      },
      {
        title: "2. DTO Pattern & Request Validation",
        content: `Never expose JPA entity models directly to API callers. Use Data Transfer Objects (DTOs) with Jakarta validation:`,
        codeLanguage: "java",
        codeSnippet: `public record CreateProjectRequest(
    @NotBlank(message = "Title is required")
    @Size(min = 3, max = 100, message = "Title must be between 3 and 100 characters")
    String title,

    @NotBlank(message = "Description cannot be empty")
    String description,

    @NotEmpty(message = "At least one technology tag required")
    List<String> technologies
) {}`,
      },
      {
        title: "3. Database Transactions & Pagination",
        bullets: [
          "Always apply `@Transactional(readOnly = true)` on query service methods to avoid dirty-checking overhead.",
          "Use Spring Data `Pageable` and return `Page<T>` or slice for high-volume datasets.",
          "Index foreign keys and query search columns in MySQL / PostgreSQL.",
        ],
      },
      {
        title: "Conclusion",
        content: `Adhering to REST principles, DTO encapsulation, and uniform error responses ensures your Spring Boot backend integrates cleanly with Next.js or mobile frontends.`,
      },
    ],
  },
  {
    id: 5,
    slug: "tailwind-dark-mode",
    title: "Implementing Perfect Dark Mode with Tailwind CSS & next-themes",
    titleJa: "TailwindCSS＆next-themesでダークモードを完璧に実装する：チラつきのない設計",
    excerpt:
      "A complete guide to implementing dark mode in a Next.js project without flash-of-white issues, using CSS variables and Tailwind's class strategy.",
    category: "CSS",
    tags: ["Tailwind CSS", "Next.js", "Dark Mode", "UI", "Frontend"],
    readTime: "7 min read",
    date: "2026-07-05",
    dateJa: "2026年7月5日",
    emoji: "🎨",
    gradient: "from-teal-700 to-teal-900",
    featured: false,
    author: {
      name: "Tun Yar Zar Toe",
      role: "Full-Stack Engineer & Tokyo IT Student",
      avatar: "/new_profile.jpeg",
      location: "Tokyo, Japan 🇯🇵",
    },
    sections: [
      {
        title: "The Flash of Unstyled Theme (FOUT) Challenge",
        content: `Many dark mode implementations suffer from a jarring white flicker on initial page load when SSR-rendered HTML doesn't match the user's persisted local storage theme.

Here is the robust setup used across this portfolio to achieve instant, flicker-free dark mode.`,
      },
      {
        title: "1. Tailwind Configuration (tailwind.config.js)",
        codeLanguage: "javascript",
        codeSnippet: `// tailwind.config.js
module.exports = {
  darkMode: "class", // Enables class-based toggling ('dark' on <html>)
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#11141A",
        secondary: "#e11d48", // Rose accent
      },
    },
  },
};`,
      },
      {
        title: "2. Setting Up ThemeProvider in _app.js",
        codeLanguage: "jsx",
        codeSnippet: `// pages/_app.js
import { ThemeProvider } from "next-themes";
import "@/app/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;`,
      },
      {
        title: "3. Creating a Hydration-Safe Switcher Component",
        codeLanguage: "jsx",
        codeSnippet: `// components/ThemeSwitcher.js
"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { HiSun, HiMoon } from "react-icons/hi2";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-9 h-9" />; // Avoid layout shift

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:scale-105 transition-all"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? <HiSun className="text-yellow-400 text-lg" /> : <HiMoon className="text-slate-700 text-lg" />}
    </button>
  );
}`,
      },
      {
        title: "Conclusion",
        content: `With class-based dark mode, CSS custom variables, and hydration safety, you deliver an elite UI experience for developers and visitors alike.`,
      },
    ],
  },
  {
    id: 6,
    slug: "typescript-for-react-devs",
    title: "TypeScript for React Developers: A Practical Guide",
    titleJa: "React開発者向けTypeScript実践ガイド：型安全なコンポーネント開発",
    excerpt:
      "Moving from JavaScript to TypeScript in a React project — typing props, hooks, API responses, and common patterns that eliminate runtime bugs.",
    category: "TypeScript",
    tags: ["TypeScript", "React", "JavaScript", "Frontend"],
    readTime: "10 min read",
    date: "2026-06-18",
    dateJa: "2026年6月18日",
    emoji: "🔷",
    gradient: "from-blue-600 to-indigo-900",
    featured: false,
    author: {
      name: "Tun Yar Zar Toe",
      role: "Full-Stack Engineer & Tokyo IT Student",
      avatar: "/new_profile.jpeg",
      location: "Tokyo, Japan 🇯🇵",
    },
    sections: [
      {
        title: "Why TypeScript is Standard in Tokyo IT Companies",
        content: `TypeScript is now the default language for modern frontend web applications across Japan. It provides self-documenting code, autocomplete, and eliminates entire classes of runtime \`undefined is not a function\` errors before code ever hits production.`,
      },
      {
        title: "1. Typing Component Props & Children",
        codeLanguage: "typescript",
        codeSnippet: `import { ReactNode } from "react";

interface ProjectCardProps {
  id: number;
  title: string;
  category: "Web" | "Mobile" | "Backend";
  tags: string[];
  isFeatured?: boolean; // Optional prop
  children?: ReactNode;
  onSelect: (id: number) => void;
}

export const ProjectCard = ({
  id,
  title,
  category,
  tags,
  isFeatured = false,
  onSelect,
}: ProjectCardProps) => {
  return (
    <div onClick={() => onSelect(id)} className="cursor-pointer">
      <h3>{title}</h3>
      <span>{category}</span>
    </div>
  );
};`,
      },
      {
        title: "2. Discriminated Unions for Clean State Handling",
        codeLanguage: "typescript",
        codeSnippet: `type FetchState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: string };

function renderState(state: FetchState<Project[]>) {
  switch (state.status) {
    case "loading":
      return <Spinner />;
    case "error":
      return <ErrorMessage message={state.error} />;
    case "success":
      return <ProjectList items={state.data} />;
  }
}`,
      },
      {
        title: "Summary",
        content: `TypeScript enhances team collaboration and makes refactoring effortless. Typing props and API contracts early saves hours of debugging later.`,
      },
    ],
  },
  {
    id: 7,
    slug: "git-workflow-japan-team",
    title: "Git Workflow for Japanese Engineering Teams",
    titleJa: "日本エンジニアチームのためのGitワークフロー：Pull Requestとレビュー作法",
    excerpt:
      "How Japanese software companies typically use Git — branch naming conventions, PR reviews (プルリクエスト), and commit message conventions in Japanese.",
    category: "DevOps",
    tags: ["Git", "DevOps", "Japan", "Teamwork", "Career"],
    readTime: "5 min read",
    date: "2026-05-30",
    dateJa: "2026年5月30日",
    emoji: "🔧",
    gradient: "from-orange-700 to-red-900",
    featured: false,
    author: {
      name: "Tun Yar Zar Toe",
      role: "Full-Stack Engineer & Tokyo IT Student",
      avatar: "/new_profile.jpeg",
      location: "Tokyo, Japan 🇯🇵",
    },
    sections: [
      {
        title: "Branch Naming Standards",
        content: `Standard branch prefixes used in Japanese engineering sprints:`,
        bullets: [
          "`feature/ISSUE-123-user-authentication`: New features or enhancements.",
          "`fix/ISSUE-456-login-validation-error`: Bug fixes.",
          "`refactor/ISSUE-789-cleanup-api-routes`: Code refactoring without behavioral changes.",
          "`docs/update-readme-japanese`: Documentation updates.",
        ],
      },
      {
        title: "Writing Clear Pull Request Descriptions (PRテンプレート)",
        codeLanguage: "markdown",
        codeSnippet: `## 概要 (Overview)
- ユーザー登録画面にJLPT資格選択セレクトボックスを追加しました。

## 変更内容 (Changes)
- [x] \`components/RegisterForm.tsx\` に資格ドロップダウンを追加
- [x] バリデーションスキーマの更新 (Zod / Yup)
- [x] 単体テストの追加 (\`__tests__/RegisterForm.test.tsx\`)

## 確認方法 (How to Verify)
1. \`npm run dev\` でローカルサーバーを起動
2. \`/register\` にアクセスし、フォーム送信の動作を確認

## スクリーンショット (Screenshots)
| Before | After |
|---|---|
| 画像添付 | 画像添付 |`,
      },
      {
        title: "Code Review Etiquette in Japan",
        content: `When giving feedback in Japanese code reviews, use prefix tags to communicate urgency:`,
        bullets: [
          "**[must]**: Required change before merging (e.g. security issue, bug).",
          "**[imo] (In My Opinion)**: Suggestion or personal style preference, mergeable as-is.",
          "**[nits]**: Minor typo or formatting nitpick.",
          "**[ask]**: Clarification question regarding implementation intent.",
        ],
      },
    ],
  },
  {
    id: 8,
    slug: "nodejs-express-api",
    title: "Node.js & Express: Building Scalable Microservices",
    titleJa: "Node.js＆Express：スケーラブルなマイクロサービスの構築と設計",
    excerpt:
      "Designing microservices with Node.js and Express — covering rate limiting, logging, error boundaries, and containerization with Docker.",
    category: "Node.js",
    tags: ["Node.js", "Express", "Microservices", "Docker", "Backend"],
    readTime: "14 min read",
    date: "2026-05-10",
    dateJa: "2026年5月10日",
    emoji: "🚀",
    gradient: "from-green-800 to-gray-900",
    featured: false,
    author: {
      name: "Tun Yar Zar Toe",
      role: "Full-Stack Engineer & Tokyo IT Student",
      avatar: "/new_profile.jpeg",
      location: "Tokyo, Japan 🇯🇵",
    },
    sections: [
      {
        title: "Scalable Folder Structure",
        content: `When scaling an Express application, organizing by domain feature or clear Controller-Service-Data layers prevents monolithic file bloat:`,
        codeLanguage: "text",
        codeSnippet: `src/
├── controllers/    # Request/response handling
├── services/       # Core business logic
├── models/         # Database schemas & interfaces
├── middlewares/    # Auth, rate-limiting, error handlers
├── routes/         # Express router endpoints
├── utils/          # Logger (Winston), helpers
└── server.ts       # App entrypoint`,
      },
      {
        title: "Centralized Error Handling Middleware",
        codeLanguage: "javascript",
        codeSnippet: `// middlewares/errorHandler.js
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  
  console.error(\`[\${new Date().toISOString()}] \${req.method} \${req.url} - \${err.message}\`);
  
  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message: err.message || "Internal Server Error",
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};

module.exports = errorHandler;`,
      },
      {
        title: "Conclusion",
        content: `Pairing Express with robust middlewares, structured logging, and Docker multi-stage builds delivers a lightweight, cloud-native backend capable of handling production traffic with ease.`,
      },
    ],
  },
];

