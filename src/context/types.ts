export type Theme = "light" | "dark"; // Тип для возможных значений темы

export interface ThemeContextProps {
  children: React.ReactNode; // Тип для пропса children в ThemeProvider
}

export interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}
