import React from "react";
import Head from "next/head";
import { useMetadata } from "@/app/metaData";
import NotFoundContent from "@/components/NotFoundContent";

export default function Custom404() {
  const metadata = useMetadata();

  return (
    <>
      <Head>
        <title>404 - Page Not Found | Tun Yar Zar Toe</title>
        <meta
          name="description"
          content="The page you are looking for does not exist on Tun Yar Zar Toe's portfolio."
        />
        <meta name="robots" content="noindex, follow" />
        {metadata.icon && <link rel="icon" href={metadata.icon.src} />}
      </Head>
      <NotFoundContent />
    </>
  );
}
