import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const Theme: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button className="theme-icon" onClick={toggleTheme}>
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
};

export default Theme;
