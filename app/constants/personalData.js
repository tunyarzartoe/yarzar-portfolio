import {
  FaBug,
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJava,
  FaJs,
  FaNode,
  FaReact,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiDotnet,
  SiFirebase,
  SiFramer,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiSpringboot,
} from "react-icons/si";
import KUMO from "../../public/logos/kumo_logo.jpeg";
import HM from "../../public/logos/hm_logo.jpeg";
import EC from "../../public/logos/es_logo.jpeg";
import TU from "../../public/logos/tu_logo.png";
import DF from "../../public/logos/default-logo-img.jpg";
// import DF from "../../public/logos/default-logo-img.png";

import P1 from "../../public/works/project-weather-app.png";
import P2 from "../../public/works/project-calculator-app.png";
import P3 from "../../public/works/project-shopping-cart.png";
import P4 from "../../public/works/project-counter-app.png";
import P5 from "../../public/works/project-social-app.png";
import POS1 from "../../public/works/project-weather-app.png";
import POS2 from "../../public/works/pos2.jpeg";
import POS3 from "../../public/works/pos3.jpeg";

// Use public paths for project media so they load consistently in the UI.
const PR = "/works/project-burmese-recipe.svg";
const AI_CARBON = "/works/project-ai-carbon-calculator.png";
// import profileImage from "@/public/new_profile.jpeg";
import AI_CARBON_LOGO from "@/public/logos/ai-carbon-logo.svg";
import RECIPE_LOGO from "@/public/logos/recipe-logo.svg";
import J4U_LOGO from "@/public/logos/j4u-logo.svg";
import WEATHER_LOGO from "@/public/logos/weather-logo.svg";
import SOCIAL_LOGO from "@/public/logos/social-logo.svg";

// const PR = "/works/project-burmese-recipe.svg";
// const AI_CARBON_LOGO = "/logos/ai-carbon-logo.svg";
// const RECIPE_LOGO = "/logos/recipe-logo.svg";
// const J4U_LOGO = "/logos/j4u-logo.svg";
// const WEATHER_LOGO = "/logos/weather-logo.svg";
// const SOCIAL_LOGO = "/logos/social-logo.svg";

export const personalData = [
  {
    title: "expertise",
    type: "expertise",
    info: [
      {
        title: "Web Development",
        icons: [
          { icon: <FaHtml5 style={{ fontSize: "35px", color: "#E44D26" }} /> },
          { icon: <FaCss3 style={{ fontSize: "35px", color: "#264de4" }} /> },
          { icon: <FaReact style={{ fontSize: "35px", color: "#61DAFB" }} /> },
          { icon: <FaJs style={{ fontSize: "35px", color: "#F0DB4F" }} /> },
          {
            icon: (
              <SiNextdotjs style={{ fontSize: "35px", color: "#2d2d2d" }} />
            ),
          },
          { icon: <SiFramer style={{ fontSize: "35px", color: "#0055FF" }} /> },
        ],
      },
      {
        title: "Backend Development",
        icons: [
          { icon: <FaJava style={{ fontSize: "35px", color: "#007396" }} /> },
          {icon: <SiPython style={{ fontSize: "35px", color: "#306998" }} />},
          { icon: <SiDotnet style={{ fontSize: "35px", color: "#512BD4" }} /> },
          {
            icon: (
              <SiSpringboot style={{ fontSize: "35px", color: "#6DB33F" }} />
            ),
          },
          {
            icon: (
              <SiNodedotjs style={{ fontSize: "35px", color: "#68A063" }} />
            ),
          },
        ],
      },
      {
        title: "Database",
        icons: [
          { icon: <SiMysql style={{ fontSize: "35px", color: "#FF0000" }} /> },
          {
            icon: <SiMongodb style={{ fontSize: "35px", color: "#00FF00" }} />,
          },
          {
            icon: <SiFirebase style={{ fontSize: "35px", color: "#0000FF" }} />,
          },
        ],
      },
      // {
      //   title: "UI/UX Design",
      //   icons: [
      //     { icon: <FaFigma style={{ fontSize: "35px", color: "#F24E1E" }} /> },
      //     {
      //       icon: (
      //         <SiAdobephotoshop
      //           style={{ fontSize: "35px", color: "#31A8FF" }}
      //         />
      //       ),
      //     },
      //   ],
      // },
    ],
  },
  {
    title: "experience",
    type: "experience",
    info: [
      {
        title: "Junior Software Developer - KUMO SOLUTIONS Co. Ltd",
        year: "2023.06 - 2024.09",
        logo: KUMO,
      },
      {
        title: "Web Developer - Evercomm Singapore",
        year: "2023 - 2024",
        logo: EC,
      },
      {
        title: "Technical Staff / IT - YSK Japanese Language School",
        year: "2022.07 - 2023.02",
        logo: DF,
      },
      {
        title: "Web Developer - Host Myanmar Mandalay",
        year: "2022 - 2023",
        logo: HM,
      },
    ],
  },
  {
    title: "Education",
    type: "Education",
    info: [
      {
        title: "東京IT&プログラミング＆会計専門学校 (Tokyo IT Programming College)",
        year: "2026 - Present",
        logo: DF,
      },
      {
        title: "東京朝日アカデミー日本語学校 (Tokyo Asahi Academy)",
        year: "2024 - 2026",
        logo: DF,
      },
      {
        title: "Host Myanmar Software Solutions Mandalay",
        year: "2022 - 2023",
        logo: HM,
      },
      {
        title: "Mandalay Technological University (MTU)",
        year: "2017 - 2020",
        logo: TU,
      },
    ],
  },
  {
    title: "Certifications",
    type: "Certifications",
    info: [
      {
        title: "JLPT N2 (Japanese-Language Proficiency Test N2 合格)",
        year: "2025.12",
        logo: DF,
      },
      {
        title: "JLPT N3 (Japanese-Language Proficiency Test N3 合格)",
        year: "2024.07",
        logo: DF,
      },
      {
        title: "Java Web Development Professional Certificate - Host Myanmar",
        year: "2023.06",
        logo: HM,
      },
    ],
  },
];

export const certificationsData = [
  {
    id: "jlpt-n2",
    title: "Japanese-Language Proficiency Test (JLPT) N2",
    japaneseTitle: "日本語能力試験 N2 合格",
    issuer: "Japan Educational Exchanges and Services / The Japan Foundation",
    issuerShort: "JEES / Japan Foundation",
    date: "Dec 2025",
    category: "Language & Business",
    badge: "Business Fluent",
    status: "Certified",
    score: "Passed",
    description: "Demonstrates high-level business Japanese fluency: ability to comprehend Japanese used in everyday situations, follow technical workplace discussions in Tokyo, and read specialized technical documentation.",
    skills: ["Business Japanese", "Technical Translation", "Workplace Communication", "Reading Comprehension", "Kanji Proficiency"],
    credentialId: "JLPT-N2-202512",
    verificationUrl: "https://www.jlpt.jp/e/",
    featured: true,
  },
  {
    id: "jlpt-n3",
    title: "Japanese-Language Proficiency Test (JLPT) N3",
    japaneseTitle: "日本語能力試験 N3 合格",
    issuer: "Japan Educational Exchanges and Services / The Japan Foundation",
    issuerShort: "JEES / Japan Foundation",
    date: "Jul 2024",
    category: "Language",
    badge: "Conversational",
    status: "Certified",
    score: "Passed",
    description: "Demonstrates intermediate Japanese proficiency: ability to understand spoken conversations at near-natural speed in daily life and follow cohesive written materials.",
    skills: ["Daily Conversation", "Grammar & Vocabulary", "Listening Comprehension"],
    credentialId: "JLPT-N3-202407",
    verificationUrl: "https://www.jlpt.jp/e/",
    featured: false,
  },
  {
    id: "java-web-dev",
    title: "Java Web Development Professional Certification",
    japaneseTitle: "Java Web開発 プロフェッショナル認定",
    issuer: "HOST MYANMAR Software Solutions (Mandalay)",
    issuerShort: "HOST MYANMAR",
    date: "Jun 2023",
    category: "Software Engineering",
    badge: "Backend & Full Stack",
    status: "Certified",
    score: "Certified",
    description: "Comprehensive enterprise engineering training covering Java Core, Spring Boot, RESTful API design, Object-Oriented Architecture, and MySQL database integration.",
    skills: ["Java Core", "Spring Boot", "REST APIs", "MySQL", "OOP Architecture", "MVC Patterns"],
    credentialId: "HM-JAVA-202306",
    verificationUrl: "https://github.com/tunyarzartoe",
    featured: true,
  },
  {
    id: "modern-frontend-spec",
    title: "Modern React & Next.js Full Stack Architecture",
    japaneseTitle: "モダン React & Next.js フルスタック開発",
    issuer: "Professional Engineering Portfolio & Verified Projects",
    issuerShort: "Engineering Verification",
    date: "2024",
    category: "Web Development",
    badge: "Frontend Architecture",
    status: "Specialization",
    score: "Advanced",
    description: "Extensive hands-on implementation of responsive, accessible, high-performance web applications using React, Next.js, Tailwind CSS, TypeScript, and state management.",
    skills: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "Redux", "API Integration"],
    credentialId: "FE-REACT-NEXT-2024",
    verificationUrl: "https://github.com/tunyarzartoe",
    featured: true,
  },
];

export const experienceData = [
  {
    id: "kumo",
    role: "Junior Software Developer / Web Developer",
    roleJapanese: "ジュニアソフトウェア開発者",
    company: "KUMO SOLUTIONS Co. Ltd",
    companyJapanese: "クモソリューションズ株式会社",
    location: "Myanmar / Remote",
    period: "Jun 2023 – Sep 2024",
    duration: "1 yr 4 mos",
    type: "Full-time",
    logo: KUMO,
    current: false,
    description: "Developed and maintained client-facing web applications, building responsive component architectures and modernizing digital portals.",
    highlights: [
      "Engineered reusable UI components with React.js and JavaScript, cutting render times and standardizing design systems.",
      "Collaborated with backend engineers to integrate RESTful endpoints, handle authentication flows, and optimize asynchronous data fetching.",
      "Participated in Agile sprints, Git/GitHub version management, code reviews, and automated release testing."
    ],
    techStack: ["React.js", "JavaScript (ES6+)", "REST APIs", "Git", "Tailwind CSS", "HTML5/CSS3"],
  },
  {
    id: "evercomm",
    role: "Web Developer (Project Contract)",
    roleJapanese: "Web デベロッパー",
    company: "Evercomm Singapore",
    companyJapanese: "Evercomm Singapore",
    location: "Singapore / Remote",
    period: "2023 – 2024",
    duration: "1 yr",
    type: "Contract",
    logo: EC,
    current: false,
    description: "Contributed to enterprise IoT and energy/carbon dashboard platforms for sustainable environmental management.",
    highlights: [
      "Designed and implemented responsive data visualization modules showing energy consumption and carbon analytics.",
      "Implemented state management and real-time data feeds for continuous equipment monitoring.",
      "Ensured cross-browser compatibility and optimized mobile responsiveness across complex dashboards."
    ],
    techStack: ["React.js", "Data Visualization", "REST APIs", "JavaScript", "Tailwind CSS"],
  },
  {
    id: "ysk",
    role: "Technical Staff / IT Specialist",
    roleJapanese: "技術職員 / ITスペシャリスト",
    company: "YSK Japanese Language School",
    companyJapanese: "YSK 日本語学校",
    location: "Myanmar",
    period: "Jul 2022 – Feb 2023",
    duration: "8 mos",
    type: "Part-time",
    logo: DF,
    current: false,
    description: "Administered internal school systems, student learning portals, website content, and hardware network infrastructure.",
    highlights: [
      "Maintained internal student management portal and ensured high system uptime.",
      "Provided frontline IT and software support to staff and students for digital course materials."
    ],
    techStack: ["System Administration", "Web Support", "HTML/CSS", "IT Infrastructure"],
  },
  {
    id: "host-myanmar",
    role: "Web Developer",
    roleJapanese: "Web デベロッパー",
    company: "Host Myanmar Software Solutions",
    companyJapanese: "Host Myanmar Software Solutions Mandalay",
    location: "Mandalay, Myanmar",
    period: "2022 – 2023",
    duration: "1 yr",
    type: "Full-time",
    logo: HM,
    current: false,
    description: "Built commercial websites and internal inventory/business solutions for regional corporate clients.",
    highlights: [
      "Created dynamic web applications using Java backend architectures and responsive frontend templates.",
      "Structured MySQL databases, wrote optimized queries, and created robust CRUD endpoints.",
      "Collaborated directly with business stakeholders to translate operational requirements into functional code."
    ],
    techStack: ["Java", "Spring Boot", "MySQL", "JavaScript", "Bootstrap", "HTML/CSS"],
  },
];

export const educationData = [
  {
    id: "tokyo-it",
    school: "Tokyo IT Programming & Accounting College",
    schoolJapanese: "東京ITプログラミング＆会計専門学校",
    location: "Tokyo, Japan (東京都)",
    degree: "Specialized Training College Diploma in IT",
    degreeJapanese: "情報処理・ITプログラミング専攻",
    period: "Apr 2026 – Present",
    status: "Currently Enrolled",
    current: true,
    logo: DF,
    description: "Intensive professional training in software architecture, enterprise application development, cloud deployment, and system security in Tokyo.",
    coursework: ["Advanced Web Systems", "Database Management", "System Architecture", "Software Engineering Best Practices"],
  },
  {
    id: "tokyo-asahi",
    school: "Tokyo Asahi Academy Japanese Language School",
    schoolJapanese: "東京朝日アカデミー日本語学校",
    location: "Tokyo, Japan (東京都)",
    degree: "Advanced Japanese Language Diploma",
    degreeJapanese: "日本語学校 卒業",
    period: "Oct 2024 – Mar 2026",
    status: "Graduated",
    current: false,
    logo: DF,
    description: "Completed comprehensive advanced Japanese curriculum up to JLPT N2 level, including professional business communication, technical reading, and workplace etiquette.",
    coursework: ["Business Japanese", "JLPT Preparation", "Workplace Communication", "Japanese Business Etiquette"],
  },
  {
    id: "host-myanmar-edu",
    school: "HOST MYANMAR Software Solutions",
    schoolJapanese: "HOST MYANMAR ソフトウェア開発養成コース",
    location: "Mandalay, Myanmar",
    degree: "Professional Java Web Development Certification",
    degreeJapanese: "Java Web 開発 修了",
    period: "May 2022 – Dec 2022",
    status: "Completed",
    current: false,
    logo: HM,
    description: "Specialized training in Java Enterprise Edition, Spring Boot, OOP design patterns, and relational database schema design.",
    coursework: ["Java EE", "Spring Framework", "MySQL Schema Design", "REST APIs"],
  },
  {
    id: "mtu",
    school: "Mandalay Technological University (MTU)",
    schoolJapanese: "ミャンマー技術大学 (Mandalay Technological University)",
    location: "Mandalay, Myanmar",
    degree: "Engineering & Technology Studies",
    degreeJapanese: "工学・技術学部",
    period: "Dec 2017 – Apr 2020",
    status: "Coursework Completed",
    current: false,
    logo: TU,
    description: "Foundational university engineering curriculum encompassing computer science concepts, engineering mathematics, digital logic, and algorithms.",
    coursework: ["Computer Science Fundamentals", "Data Structures", "Engineering Mathematics", "Digital Logic"],
  },
];

export const servicesData = [
  {
    icon: <FaFigma style={{ fontSize: "35px", color: "#0055FF" }} />,
    title: "UI/UX Design",
  },
  {
    icon: <SiJavascript style={{ fontSize: "35px", color: "#FFD700" }} />,
    title: "Web Development",
  },
  {
    icon: <FaReact style={{ fontSize: "35px", color: "#61DAFB" }} />,
    title: "App Development",
  },
  {
    icon: <FaBug style={{ fontSize: "35px", color: "#2d2d2d" }} />,
    title: "Bug Fixing",
  },
  {
    icon: <FaNode style={{ fontSize: "35px", color: "#68A063" }} />,
    title: "Backend Development",
  },
];

export const workData = [
  // {
  //   id: 8,
  //   description: "A dynamic weather forecasting app providing real-time weather updates and a 5-day forecast.",
  //   title: "Weather App",
  //   name: "A Dynamic Weather App",
  //   images: [{ url: P1 }],
  //   logo: WEATHER_LOGO,
  //   languages: ["ReactJS", "Bootstrap", "Axios", "React-icons"],
  //   demoLink: "https://react-weather-app-eta-bay.vercel.app/",
  //   lang: { name: "ReactJs", icon: "FaReact" }
  // },
  // {
  //   id: 7,`
  //   description: "A social app built with Redux for state management, demonstrating posts with author and post CRUD.",
  //   title: "Social App",
  //   name: "A React Social App",
  //   images: [{ url: P5 }],
  //   logo: SOCIAL_LOGO,
  //   languages: ["ReactJS", "Bootstrap", "React-dom", "React-redux", "Date-fns", "Axios", "Jquery", "Datatable"],
  //   demoLink: "https://react-social-app-gules.vercel.app/",
  //   lang: { name: "ReactJs", icon: "FaReact" }
  // },
  {
    id: 3,
    description: "An AI-powered carbon footprint calculator that estimates emissions from daily activities and highlights ways to reduce impact.",
    title: "CO2 AI",
    name: "AI Carbon Calculator - Carbon Footprint Estimator",
    images: [
      { url: AI_CARBON_LOGO },
    ],
    logo: AI_CARBON_LOGO,
    languages: ["ReactJS", "Next.js", "Tailwind CSS", "AI Integration"],
    demoLink: "https://ai-carbon-calculator.vercel.app/",
    lang: { name: "ReactJs", icon: "FaReact" }
  },
  {
    id: 2,
    description: "A Burmese recipe collection app . Browse traditional recipes, view ingredients and instructions, and navigate between recipe pages.",
    title: "Recipe App",
    name: "Burmese Recipe App - Recipes & Instructions",
    images: [
      { url: RECIPE_LOGO },
    ],
    logo: RECIPE_LOGO,
    languages: ["ReactJS", "MobX", "React Router", "CSS"],
    demoLink: "https://burmese-recipe-app-iota.vercel.app/",
    lang: { name: "ReactJs", icon: "FaReact" }
  },
  {
    id: 1,
    description: "J4U is a job portal platform connecting job seekers with companies. Features include job listings, company profiles, job filtering, and user authentication.",
    title: "J4U",
    name: "J4U - Job Portal Platform",
    images: [
      { url: J4U_LOGO },
    ],
    logo: J4U_LOGO,
    languages: ["ReactJS", "Redux", "React Router", "Bootstrap", "MDB UI Kit"],
    demoLink: "https://j4u-frontend.vercel.app/",
    lang: { name: "ReactJs", icon: "FaReact" }
  },
  // Add more projects as needed
];

