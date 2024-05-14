import React, { useState, useEffect, Suspense } from "react";
import { ThemeProvider } from "next-themes";
import { I18nextProvider } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import i18n from "@/i18n";
import LoadingAnimation from "@/app/LoadingAnimation";
import RootLayout from "@/app/layout";
import Logo from "../public/logo_icon.png"
import Profile from "../public/profile.jpg"
import Icon from "../app/favicon.ico"





const MyApp = ({ Component, pageProps }) => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const images = [];

    const imageUrls = [Logo, Profile];
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
      images.push(img);
    });

    const favicon = new Image();
    favicon.src = Icon;
    images.push(favicon);


    Promise.all(images.map(img => {
      return new Promise(resolve => {
        img.onload = img.onerror = resolve;
      });
    })).then(() => {
      // Once all assets are preloaded, set isLoading to false
      setIsLoading(false);
    });

  }, []);

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
      <ThemeProvider>
        <I18nextProvider i18n={i18n}>
          <RootLayout>
            <AnimatePresence mode="wait">
              <motion.div key={router.route} className="h-full">
              <Suspense fallback={<div className="py-20"><LoadingAnimation /></div>}>
                <Component {...pageProps} />
                </Suspense>
              </motion.div>
            </AnimatePresence>
          </RootLayout>
        </I18nextProvider>
      </ThemeProvider>
  );
};

export default MyApp;
