import RootLayout from "@/app/layout";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { Suspense } from "react";
import { ThemeProvider } from "next-themes";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n";
import LoadingAnimation from "@/components/main/LoadingAnimation";
// import ".global.css";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <ThemeProvider>
      <I18nextProvider i18n={i18n}>
        <RootLayout>
          <AnimatePresence mode="wait">
            <Suspense fallback={<LoadingAnimation />}>
              <motion.div key={router.route} className="h-full">
                <Component {...pageProps} />
              </motion.div>
            </Suspense>
          </AnimatePresence>
        </RootLayout>
      </I18nextProvider>
    </ThemeProvider>
  );
};

export default MyApp;
