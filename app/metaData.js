// useMetadata.js
"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Icon from "./favicon.ico"

export const useMetadata = () => {
  const [metadata, setMetadata] = useState({
    title: '',
    description: '',
    icon:Icon
  });
  const router = useRouter();

  useEffect(() => {
    const handleMetadata = () => {
      const { pathname } = router;
      if (pathname === "/") {
        setMetadata({
          title: "Tun Yar Zar Toe - Software Engineer",
          description: "Description for the About page",
        });
      } else if (pathname === "/about") {
        setMetadata({
          title: "Tun Yar Zar Toe | About",
          description: "Description for the Contact page",
        });
      } else if (pathname === "/services") {
        setMetadata({
          title: "Tun Yar Zar Toe | Services",
          description: "Description for the Contact page",
        });
      } else if (pathname === "/work") {
        setMetadata({
          title: "Tun Yar Zar Toe | Work",
          description: "Description for the Contact page",
        });
      } else if (pathname === "/contact") {
        setMetadata({
          title: "Tun Yar Zar Toe | Contact",
          description: "Description for the Contact page",
        });
      } else {
        setMetadata({
          title: "Tun Yar Zar Toe | Articles ",
          description: "Default description for your site",
        });
      }
    };
    handleMetadata();
    router.events.on("routeChangeComplete", handleMetadata);

    return () => {
      router.events.off("routeChangeComplete", handleMetadata);
    };
  }, [router,Icon]);

  return metadata;
};
