import { UserInfoProps } from "./types";

const UserModal = ({
  userInfo,
  onClose,
}: UserInfoProps & { onClose: () => void }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Детали пользователя</h3>
        <p>
          <strong>Имя:</strong> {userInfo?.name}
        </p>
        <p>
          <strong>Email:</strong> {userInfo?.email}
        </p>
        <p>
          <strong>Телефон:</strong> {userInfo?.phone}
        </p>
        <p>
          <strong>Адрес:</strong>{" "}
          {`${userInfo?.address.street}, ${userInfo?.address.city}, ${userInfo?.address.zipcode}`}
        </p>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default UserModal;
