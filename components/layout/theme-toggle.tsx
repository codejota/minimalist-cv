"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const initialTheme = resolvedTheme || "light";

  return (
    <Button
      variant="outline"
      type="button"
      size="icon"
      className="w-10 h-10 rounded-full p-0"
      onClick={() => {
        setTheme(initialTheme === "light" ? "dark" : "light");
      }}
    >
      <span className="sr-only"></span>
      <SunIcon className="size-15 dark:hidden" />
      <MoonIcon className="hidden size-15 dark:block" />
    </Button>
  );
};

export default ThemeToggle;
