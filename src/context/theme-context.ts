import { createContext } from "react";

interface ThemeContextInterface {
  isDarkTheme?: boolean;
  toggleTheme?: () => void;
}

export const ThemeContext = createContext<ThemeContextInterface>({});
