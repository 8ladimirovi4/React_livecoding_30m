import CommonButton from "../../components/CommonButton/CommonButton";
import UserList from "../../components/UserList/UserList";
import { useTheme } from "../../context/ThemeContext";
import "./styles.css";

const Main = () => {
  const themeContext = useTheme();

  if (!themeContext) {
    return null;
  }

  const { theme, toggleTheme } = themeContext;

  return (
    <div className={theme === "dark" ? "main-wrapper-dark" : ""}>
      <div className="main-button">
        <CommonButton onClick={toggleTheme} testId={"toogle-theme"}>
          {theme === "dark" ? "Светлая тема" : "Темная тема"}
        </CommonButton>
      </div>
      <UserList theme={theme} />;
    </div>
  );
};

export default Main;
