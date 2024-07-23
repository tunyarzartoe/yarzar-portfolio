import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import StarsCanvas from "@/components/main/StarBackground";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <div className={inter.className}>
      <StarsCanvas />
      <Header />
      <Sidebar />
      <main>{children}</main>
      <Footer/>
    </div>
  );
}
