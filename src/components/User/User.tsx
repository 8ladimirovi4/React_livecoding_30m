import CommonButton from "../CommonButton/CommonButton";
import { UserProps } from "./types";
import "./styles.css";

const User = ({ paginatedUsers = [], handleSelectUser }: UserProps) => {
  return (
    <ul className="user-wrapper">
      {paginatedUsers.map((user) => (
        <li key={user.id} className="user-wrapper_item">
          <span>{user.name}</span>
          <div className="user-wrapper_item_buttons">
            <CommonButton onClick={() => handleSelectUser(user)}>
              Подробнее
            </CommonButton>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default User;
