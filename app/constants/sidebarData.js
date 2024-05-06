import {
  HiChatBubbleBottomCenterText,
  HiEnvelope,
  HiHome,
  HiRectangleGroup,
  HiSquare2Stack,
  HiUser,
} from "react-icons/hi2";
import { RxDesktop } from "react-icons/rx";
import { BiBug } from "react-icons/bi";
import { FaBug } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export const sidebarData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiSquare2Stack /> },
  {
    name: "testimonials",
    path: "/testimonial",
    icon: <HiChatBubbleBottomCenterText />,
  },
  { name: "contact", path: "/contact", icon: <HiEnvelope /> },
];
