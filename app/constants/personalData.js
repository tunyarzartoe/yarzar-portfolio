import { FaBug, FaCss3, FaFigma, FaHtml5, FaJava, FaJs, FaNode, FaReact } from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiDotnet,
  SiFramer,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiSpringboot,
} from "react-icons/si";
import KUMO from "../../public/logos/kumo_logo.jpeg";
import HM from "../../public/logos/hm_logo.jpeg";
import EC from "../../public/logos/es_logo.jpeg";
import TU from "../../public/logos/tu_logo.png";

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
          { icon: <FaJava style={{ fontSize: "35px", color: "#007396" }} />},
          { icon: <SiDotnet style={{ fontSize: "35px", color: "#512BD4" }} />}, 
          { icon: <SiSpringboot style={{ fontSize: "35px", color: "#6DB33F" }} /> },
          { icon: <SiNodedotjs style={{ fontSize: "35px", color: "#68A063" }} />}, 

        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          { icon: <FaFigma style={{ fontSize: "35px", color: "#F24E1E" }} />}, 
          { icon: <SiAdobexd style={{ fontSize: "35px", color: "#FF61F6" }} />}, 
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

export const servicesData =[
  {
    icon: <FaFigma style={{ fontSize: "35px", color: "#68A063" }} />, 
    title:"UI/UX Design",

  },
  {
    icon: <SiJavascript style={{ fontSize: "35px", color: "#68A063" }} />, 
    title:"Web Development",

  },
  {
    icon: <FaReact style={{ fontSize: "35px", color: "#68A063" }} />, 
    title:"App Development ",

  },
  {
    icon: <FaBug style={{ fontSize: "35px", color: "#68A063" }} />, 
    title:"Bux Fixing",

  },
  {
    icon: <FaNode style={{ fontSize: "35px", color: "#68A063" }} />, 
    title:"Backend Development",

  },
]