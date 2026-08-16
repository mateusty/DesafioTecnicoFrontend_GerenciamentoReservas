import { useEffect, useState, type ReactNode } from "react";
import { type Theme } from "./ThemeContext";
import { ThemeContext } from "./ThemeContext";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>("light");
  const [currentFontSize, setCurrentFontSize] = useState<number>(22);

  const toggleTheme = () => {
    setCurrentTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const increaseFontSize = () => {
    if(currentFontSize < 28) {
      setCurrentFontSize(prev => prev + 2)
    }
  };

  const decreaseFontSize = () => {
    if(currentFontSize > 16) {
      setCurrentFontSize(prev => prev - 2)
    }
  }

  useEffect(() => {
    document.body.dataset.theme = currentTheme;
  }, [currentTheme]);
  
  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme, currentFontSize, increaseFontSize, decreaseFontSize }}>
      {children}
    </ThemeContext.Provider>
  );
}