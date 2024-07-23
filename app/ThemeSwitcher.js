"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { SunIcon } from "@/tools/SunIcon";
import { MoonIcon } from "@/tools/MoonIcon";
import { Switch } from "@nextui-org/react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <Switch
    className="cursor-pinter py-1 px-10"
      defaultSelected
      size="lg"
      color="default"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <MoonIcon className={className} />
        ) : (
          <SunIcon className={className} />
        )
      }
      onClick={handleTheme}
    ></Switch>
  );
};

export default ThemeSwitcher;
