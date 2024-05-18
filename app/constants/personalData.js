import { FaBug, FaCss3, FaFigma, FaHtml5, FaJava, FaJs, FaNode, FaReact } from "react-icons/fa";
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
  SiSpringboot,
} from "react-icons/si";
import KUMO from "../../public/logos/kumo_logo.jpeg";
import HM from "../../public/logos/hm_logo.jpeg";
import EC from "../../public/logos/es_logo.jpeg";
import TU from "../../public/logos/tu_logo.png";

import P1 from "../../public/works/p1.jpeg";
import P2 from "../../public/works/p2.jpeg";
import P3 from "../../public/works/p3.jpeg";
import POS1 from "../../public/works/pos.jpeg";
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
          { icon: <FaHtml5 style={{ fontSize: "35px", color: "#E44D26" }} />}, 
          { icon: <FaCss3 style={{ fontSize: "35px", color: "#264de4" }} />}, 
          { icon: <FaReact style={{ fontSize: "35px", color: "#61DAFB" }} />}, 
          { icon: <FaJs style={{ fontSize: "35px", color: "#F0DB4F" }} />}, 
          { icon: <SiNextdotjs style={{ fontSize: "35px", color: "#2d2d2d" }} />},
          { icon: <SiFramer style={{ fontSize: "35px", color: "#0055FF" }} />}, 
          

        ],
      },
      {
        title: "Backend Development",
        icons: [
          { icon: <FaJava style={{ fontSize: "35px", color: "#007396" }} />},
          { icon: <SiDotnet style={{ fontSize: "35px", color: "#512BD4" }} />}, 
          { icon: <SiSpringboot style={{ fontSize: "35px", color: "#6DB33F" }} /> },
          { icon: <SiNodedotjs style={{ fontSize: "35px", color: "#68A063" }} />}, 
        ],
      },
      {
        title: "Database",
        icons: [
          { icon: <SiMysql style={{ fontSize: "35px", color: "#FF0000" }} /> },
          { icon: <SiMongodb style={{ fontSize: "35px", color: "#00FF00" }} /> }, 
          { icon: <SiFirebase style={{ fontSize: "35px", color: "#0000FF" }} /> },
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          { icon: <FaFigma style={{ fontSize: "35px", color: "#F24E1E" }} />}, 
          { icon: <SiAdobephotoshop style={{ fontSize: "35px", color: "#31A8FF" }} />}, 
        ],
      },
    ],
  },
  {
    title: "experience",
    type: "experience",
    info: [
      {
        title: "Full Stack Developer - Kumo Solutions Software Company",
        year: "2023-",
        logo: KUMO,
      },
      {
        title: "Full Stack Developer - Evercomm Sigapore",
        year: "2023-",
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
        title: "Host Myanmar Software Solutions",
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
    description: 'This is the description for Ecommerce.',
    title: "Ecommerce",
    images: [
      { url: P1 },
      { url: P2 },
      // { url: P3 }
    ]
  },
  {
    id: 2,
    description: 'This is the description for POS.',
    title: "POS",
        images: [
      { url: P1 },
      { url: POS2 },
      // { url: POS3 }
    ]
  },
  {
    id: 3,
    description: 'This is the description for POS.',
    title: "POS",
        images: [
      { url: P1 },
      { url: POS2 },
      // { url: POS3 }
    ]
  },
  {
    id: 4,
    description: 'This is the description for POS.',
    title: "POS",
        images: [
      { url: P1 },
      { url: POS2 },
      // { url: POS3 }
    ]
  },
  // Add more projects as needed
];
