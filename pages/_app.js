import React, { useState, useEffect, Suspense } from "react";
import { ThemeProvider } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
// import i18n from "@/i18n";
import dynamic from "next/dynamic";
import RootLayout from "@/app/layout";
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
    return <LoadingAnimation />;
  }

  return (
    <ThemeProvider>
        <RootLayout>
          <AnimatePresence mode="wait">
            <motion.div key={router.route} className="h-full">
              <Suspense fallback={<LoadingAnimation />}>
                <Component {...pageProps} />
              </Suspense>
            </motion.div>
          </AnimatePresence>
        </RootLayout>
    </ThemeProvider>
  );
};

export default MyApp;
