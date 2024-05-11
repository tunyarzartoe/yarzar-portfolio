import {
  HiChatBubbleBottomCenterText,
  HiDocument,
  HiEnvelope,
  HiHome,
  HiRectangleGroup,
  HiSquare2Stack,
  HiUser,
} from "react-icons/hi2";

export const sidebarData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiSquare2Stack /> },
  // {
  //   name: "testimonials",
  //   path: "/testimonial",
  //   icon: <HiChatBubbleBottomCenterText />,
  // },
  {
    name: "articles",
    path: "/article",
    icon: <HiDocument />,
  },
  { name: "contact", path: "/contact", icon: <HiEnvelope /> },
];
