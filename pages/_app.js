import RootLayout from "@/app/layout";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { Suspense } from "react";
import { ThemeProvider } from "next-themes";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n";
import LoadingAnimation from "@/components/main/LoadingAnimation";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <ThemeProvider>
      <I18nextProvider i18n={i18n}>
        <RootLayout>
          <Suspense fallback={<LoadingAnimation />}>
            <AnimatePresence mode="wait">
              <motion.div key={router.route} className="h-full">
                <Component {...pageProps} />
              </motion.div>
            </AnimatePresence>
          </Suspense>
        </RootLayout>
      </I18nextProvider>
    </ThemeProvider>
  );
};

export default MyApp;
