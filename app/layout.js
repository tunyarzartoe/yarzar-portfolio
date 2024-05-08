import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import StarsCanvas from "@/components/main/StarBackground";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <div className={inter.className} style={{ position: "relative" }}>
      <Header />
      <StarsCanvas  />
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
