import CommonButton from "../../components/CommonButton/CommonButton";
import UserList from "../../components/UserList/UserList";
import { useTheme } from "../../context/ThemeContext";
import './styles.css'

const Main = () => {
  const themeContext = useTheme();

  if (!themeContext) {
    return null; 
  }

  const { theme, toggleTheme } = themeContext;

  return(
    <>
    <div className="main-button">
<CommonButton onClick={toggleTheme} >{ theme ==='dark' ? 'Темная тема' : 'Светлая тема'}</CommonButton>
    </div>
<UserList theme={theme}/>;
</>
  ) 
};

export default Main;
