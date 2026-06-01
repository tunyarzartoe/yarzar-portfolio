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

import PR from "../../public/works/project-burmese-recipe.svg";


import POS1 from "../../public/works/project-weather-app.png";
import POS2 from "../../public/works/pos2.jpeg";
import POS3 from "../../public/works/pos3.jpeg";

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
        title: "Web Developer - Kumo Solutions Software Company",
        year: "2023 - 2024",
        logo: KUMO,
      },
      {
        title: "Web Developer - Evercomm Sigapore",
        year: "2023 - 2024",
        logo: EC,
      },
      {
        title: "Web Developer -  Host Myanmar Mandalay",
        year: "2022-2023",
        logo: HM,
      },
    ],
  },
  {
    title: "Education",
    type: "Education",
    info: [
      {
        title: "東京IT&プログラミング＆会計専門学校",
        year: "2026-Present",
        logo: DF,
      },
      {
        title: "東京明日アカデミー日本語学校",
        year: "2024-2026",
        logo: DF,
      },
      {
        title: "Host Myanmar Software Solutions Mandalay",
        year: "2022-2023",
        logo: HM,
      },
      {
        title: "Technological University Mandalay",
        year: "2018-2020",
        logo: TU,
      },
    ],
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
  {
    id: 1,
    description: "A social app built with Redux for state management, demonstrating posts with author and post CRUD.",
    title: "Social App",
    name:"A React Social App",
    images: [
      { url: P5 },
    ],
    logo :"https://cdn-icons-png.flaticon.com/128/719/719680.png",
    languages: ["ReactJS", "Bootstrap","React-dom","React-redux","Date-fns","Axios","Jquery","Datatable"],
    demoLink: "https://react-social-app-gules.vercel.app/",
    lang: { name: "ReactJs", icon: "FaReact" }
  },
  {
    id: 2,
    description: "A dynamic weather forecasting app providing real-time weather updates and a 5-day forecast.",
    title: "Weather App",
    name:"A Dynamic Weather App",
    images: [
      { url: P1 },
    ],
    logo :"https://cdn-icons-png.flaticon.com/128/6451/6451205.png",
    languages: ["ReactJS", "Bootstrap","Axios","React-icons"],
    demoLink: "https://react-weather-app-eta-bay.vercel.app/",
    lang: { name: "ReactJs", icon: "FaReact" }
  },
  {
    id: 3,
    description: "A simple and user-friendly calculator app for basic arithmetic operations like IOS Calculator Design.",
    title: "Calculator App",
    name:"A Simple Calculator App",
    images: [
      { url: P2 },
    ],
    logo :"https://cdn-icons-png.flaticon.com/128/891/891175.png",
    languages: ["ReactJS", "Bootstrap"],
    demoLink: "https://react-calculator-app-sandy.vercel.app/",
    lang: { name: "ReactJs", icon: "FaReact" }
  },
  // {
  //   id: 4,
  //   description: "An intuitive shopping cart application to manage products and track purchases and using sweetalert and notiflix.",
  //   title: "Shopping Cart",
  //   name:"An Intutitive Shopping Cart",
  //   images: [
  //     { url: P3 },
  //   ],
  //   logo :"https://cdn-icons-png.flaticon.com/512/1170/1170576.png",
  //   languages: ["Javascript", "JQuery", "Bootstrap","Sweetalert","Notiflix"],
  //   demoLink: "https://shopping-cart-nine-lilac-38.vercel.app/index.html",
  //   lang: { name: "JavaScript", icon: "FaJs" }
  // },
  {
    id: 4,
    description: "A counter app built with Redux for state management, demonstrating increment and decrement functionality.",
    title: "Counter App",
    name:"React Redux Counter App",
    images: [
      { url: P4 },
    ],
    logo :"https://cdn.iconscout.com/icon/free/png-512/free-redux-2336949-1982830.png",
    languages: ["ReactJS", "Bootstrap","React-dom","React-redux"],
    demoLink: "https://redux-counter-app-orcin.vercel.app/",
    lang: { name: "ReactJs", icon: "FaReact" }
  },
  {
    id: 5,
    description: "A Burmese recipe collection app built with React (Create React App). Browse traditional recipes, view ingredients and instructions, and navigate between recipe pages.",
    title: "Burmese Recipe App",
    name: "Burmese Recipe App - Recipes & Instructions",
    images: [
      { url: PR },
    ],
    logo: "https://cdn-icons-png.flaticon.com/128/3075/3075977.png",
    languages: ["ReactJS", "MobX", "React Router", "CSS"],
    demoLink: "https://burmese-recipe-app-iota.vercel.app/",
    lang: { name: "ReactJs", icon: "FaReact" }
  },
  // Add more projects as needed
];

