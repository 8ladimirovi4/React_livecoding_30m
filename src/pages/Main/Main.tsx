import CommonButton from "../../components/CommonButton/CommonButton";
import UserList from "../../components/UserList/UserList";
import { useTheme } from "../../context/ThemeContext";
import "./styles.css";

const Main = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className="main-button">
        <CommonButton onClick={toggleTheme} testId={"toogle-theme"}>
          {theme === "dark" ? "Светлая тема" : "Темная тема"}
        </CommonButton>
      </div>
      <UserList />;
    </>
  );
};

export default Main;
