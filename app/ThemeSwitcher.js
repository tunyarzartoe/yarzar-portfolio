"use client"
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { SunIcon } from "@/tools/SunIcon";
import { MoonIcon } from "@/tools/MoonIcon";
import { Switch } from "@nextui-org/react";
const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const {theme, setTheme} = useTheme();
  useEffect(() => {
    setMounted(true);
  });
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
    <div>
      <Switch
        defaultSelected
        size="lg"
        color="success"
        onClick={handleTheme}
        startContent={<SunIcon />}
        endContent={<MoonIcon />}
      />
    </div>
  );
};

export default ThemeSwitcher;
