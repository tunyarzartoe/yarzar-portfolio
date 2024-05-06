import RootLayout from "@/app/layout";
import Transition from "@/components/Transition";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <RootLayout>
        <AnimatePresence mode="wait">
          <div>
            <Transition/>
            <Component {...pageProps}/>
          </div>
        </AnimatePresence>
    </RootLayout>
  );
};

export default MyApp;
