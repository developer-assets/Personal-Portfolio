import { Theme } from "../typescript/types";

export const getInitialTheme = (): Theme => {
  const savedTheme = localStorage.getItem("theme") as Theme;
  if (savedTheme && (savedTheme === "dark" || savedTheme === "light")) {
    return savedTheme;
  }

  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  return prefersDarkMode ? "dark" : "light";
};
