import { useTheme } from "../../context/ThemeContext";
import { InputProps } from "./types";
import "./styles.css";

const CommonInput = ({
  type = "",
  placeholder = "",
  value = "",
  inputAction = () => {},
}: InputProps) => {
  const themeContext = useTheme();

  if (!themeContext) {
    return null;
  }
  const { theme } = themeContext;

  return (
    <input
      className={theme === "light" ? "input" : "input" + " " + "input-dark"}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={inputAction}
    />
  );
};

export default CommonInput;
