// useMetadata.js
"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Icon from "./logo_icon.png"

export const useMetadata = () => {
  const [metadata, setMetadata] = useState({
    title: '',
    description: '',
    icon: Icon,
  });
  const router = useRouter();

  useEffect(() => {
    const handleMetadata = () => {
      const { pathname } = router;
      if (pathname === "/") {
        setMetadata({
          title: "Tun Yar Zar Toe",
          description: "Description for the About page",
        });
      } else if (pathname === "/about") {
        setMetadata({
          title: "About | Tun Yar Zar Toe",
          description: "Description for the Contact page",
        });
      } else if (pathname === "/services") {
        setMetadata({
          title: "Services | Tun Yar Zar Toe",
          description: "Description for the Contact page",
        });
      } else if (pathname === "/work") {
        setMetadata({
          title: "Work | Tun Yar Zar Toe",
          description: "Description for the Contact page",
          icon: Icon,
        });
      } else if (pathname === "/contact") {
        setMetadata({
          title: "Contact | Tun Yar Zar Toe",
          description: "Description for the Contact page",
        });
      } else {
        setMetadata({
          title: "Articles | Tun Yar Zar Toe",
          description: "Default description for your site",
        });
      }
    };
    handleMetadata();
    router.events.on("routeChangeComplete", handleMetadata);

    return () => {
      router.events.off("routeChangeComplete", handleMetadata);
    };
  }, [router]);

  return metadata;
};
