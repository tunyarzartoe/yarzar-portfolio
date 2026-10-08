import React, { useState, useEffect, Suspense } from "react";
import { ThemeProvider } from "next-themes";
import { I18nextProvider } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import i18n from "@/i18n";
import dynamic from "next/dynamic";
import "@/app/globals.css";
import Layout from "@/components/Layout";
import Logo from "../public/logo_icon.png";
import Profile from "../public/profile.jpg";
import Icon from "../app/favicon.ico";
import 'react-toastify/dist/ReactToastify.css';

const LoadingAnimation = dynamic(() => import('../components/LoadingAnimation'), { ssr: false });

const MyApp = ({ Component, pageProps }) => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const preloadImages = () => {
      const imageUrls = [Logo, Profile, Icon];
      
      imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url.src; 
      });
    };

    preloadImages();

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);  
  }, []);

  if (isLoading) {
    return (
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <I18nextProvider i18n={i18n}>
          <LoadingAnimation />
        </I18nextProvider>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <I18nextProvider i18n={i18n}>
        <Layout>
          <AnimatePresence mode="wait">
            <motion.div key={router.route} className="h-full">
              <Suspense fallback={<LoadingAnimation />}>
                <Component {...pageProps} />
              </Suspense>
            </motion.div>
          </AnimatePresence>
        </Layout>
      </I18nextProvider>
    </ThemeProvider>
  );
};

export default MyApp;
