import RootLayout from "@/app/layout";
import Transition from "@/components/Transition";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";
import { ThemeProvider } from "next-themes";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <ThemeProvider>
      <I18nextProvider i18n={i18n}>
        <RootLayout>
          <AnimatePresence mode="wait">
            <motion.div key={router.route} className="h-full">
              <Transition />
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </RootLayout>
      </I18nextProvider>
    </ThemeProvider>
  );
};

export default MyApp;
