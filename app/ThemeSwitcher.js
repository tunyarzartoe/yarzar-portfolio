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

  if (!mounted) return null;
  return (
    <Switch
      className="cursor-pinter py-1 px-10 xs:px-6"
      // defaultSelected
      size="lg"
      isSelected={theme === "dark"}
      onValueChange={(isSelected) => setTheme(isSelected ? "dark" : "light")}
      thumbIcon={({ isSelected }) =>
        isSelected ? (
          <MoonIcon className="text-black" />
        ) : (
          <SunIcon className="text-yellow-500" />
        )
      }
    // onClick={handleTheme}
    ></Switch>
  );
};

export default ThemeSwitcher;
