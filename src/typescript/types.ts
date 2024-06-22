import React from "react";

interface HeaderNav {
  name: string;
  link: string;
}

interface FooterLink {
  icon: React.ReactNode;
  link: string;
}

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export type Theme = "dark" | "light";
export type HeaderNavs = HeaderNav[];
export type FooterLinks = FooterLink[];
