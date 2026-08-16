import { createContext } from 'react';

export type Theme = 'light' | 'dark';

interface ThemeContextType {
  currentTheme: Theme;
  toggleTheme: () => void;
  currentFontSize: number;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType)