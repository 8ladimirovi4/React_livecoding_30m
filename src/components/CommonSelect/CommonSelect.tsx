import { useTheme } from "../../context/ThemeContext";
import { SelectProps } from "./types";
import "./styles.css";

const CommonSelect = ({
  values = [],
  selectAction = () => {},
}: SelectProps) => {
  const themeContext = useTheme();

  if (!themeContext) {
    return null;
  }
  const { theme } = themeContext;

  return (
    <select
      onChange={selectAction}
      className={theme === "light" ? "select" : "select" + " " + "select-dark"}
    >
      {values.map((value, idx) => (
        <option key={idx} value={value.option}>
          {value.name}
        </option>
      ))}
    </select>
  );
};

export default CommonSelect;
