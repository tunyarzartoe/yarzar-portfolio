import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import StarsCanvas from "@/components/main/StarBackground";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <div className="font-sans antialiased min-h-screen flex flex-col justify-between">
      <StarsCanvas />
      <Header />
      <Sidebar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
