import React from "react";
import { ButtonProps } from "./types";
import { useTheme } from "../../context/ThemeContext";
import "./styles.css";
// Кнопка - это переиспользуемый компонент
// React.memo предотвращать повторный рендер компонента, если его props не изменились
const CommonButton = React.memo(({ onClick, children }: ButtonProps) => {
  const themeContext = useTheme();

  if (!themeContext) {
    return null;
  }
  const { theme } = themeContext;

  return (
    <button
      className={theme === "light" ? "button" : "button" + " " + "button-dark"}
      onClick={onClick}
    >
      {children}
    </button>
  );
});

export default CommonButton;
