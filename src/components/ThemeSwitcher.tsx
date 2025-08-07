"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-4 py-2 border rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
    >
      {theme === "dark" ? "🌞 Claro" : "🌙 Escuro"}
    </button>
  );
}