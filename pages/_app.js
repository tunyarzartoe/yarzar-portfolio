import RootLayout from "@/app/layout";
import Transition from "@/components/Transition";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";
import {motion} from 'framer-motion'

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <RootLayout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full">
            <Transition/>
            <Component {...pageProps}/>
          </motion.div>
        </AnimatePresence>
    </RootLayout>
  );
};

export default MyApp;
