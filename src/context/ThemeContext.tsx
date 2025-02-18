// ThemeContext.tsx

import { createContext, useState, useContext, useEffect } from "react";
import { Theme, ThemeContextProps, ThemeContextValue } from "./types";

// Типизация контекста, где значение может быть ThemeContextValue или null
const ThemeContext = createContext<ThemeContextValue | null>(null);

export const ThemeProvider = ({ children }: ThemeContextProps) => {
  const storedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState<Theme>(storedTheme as Theme); // Указываем тип состояния

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext); // Возвращаем типизированное значение
