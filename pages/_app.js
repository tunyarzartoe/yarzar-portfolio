import RootLayout from "@/app/layout";
import Transition from "@/components/Transition";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";
import {motion} from 'framer-motion'
import { ThemeProvider } from "next-themes";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <ThemeProvider attribute="class">
    <RootLayout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full">
            <Transition/>
            <Component {...pageProps}/>
          </motion.div>
        </AnimatePresence>
    </RootLayout>
    </ThemeProvider>
  );
};

export default MyApp;
