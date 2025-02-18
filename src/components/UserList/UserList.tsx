import "./styles.css";
import { useState, useEffect, useCallback, useMemo } from "react";
import { UserType } from "./types";
import CommonButton from "../CommonButton/CommonButton";
import UserModal from "../UserModal/UserModal";
import CommonInput from "../CommonInput/CommonInput";
import CommonSelect from "../CommonSelect/CommonSelect";
import Toolbar from "../../features/Toolbar/Toolbar";
import Pagination from "../../features/Pgination/Pagination";

const selectValues = [
  { name: "по имени", option: "name" },
  { name: "по email", option: "email" },
];
const selectItems = [
  { name: "2", option: "2" },
  { name: "4", option: "4" },
];

const UserList = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<UserType[]>([]);
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");
  const [sortField, setSortField] = useState("name");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(2);

  // Фетчинг пользователей с кэшированием
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data: UserType[] = await response.json();
        setUsers(data);
      } catch (err) {
        setError("Ошибка загрузки пользователей");
      } finally {
        setLoading(false);
      }
    };

    //предотвращает повторную загрузку данных при каждом рендере компонента.
    if (users.length === 0) {
      fetchUsers();
    }
  }, [users.length]);

  useEffect(() => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [search, users]);

  useEffect(() => {
    const sorted = [...users].sort((a, b) => {
      const key = sortField as keyof UserType;

      if (typeof a[key] === "string" && typeof b[key] === "string") {
        return (a[key] as string).localeCompare(b[key] as string);
      }
      return 0; // Для случаев, если `sortField` не строка
    });
    setFilteredUsers(sorted);
  }, [sortField, users]);

  // Функция выбора пользователя
  // Функци не будет пересоздаваться при последующих рендерах.
  const handleSelectUser = useCallback((user: UserType) => {
    setSelectedUser(user);
  }, []);

  const handleCloseModal = () => setSelectedUser(null);

  const handleSortFields = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortField(e.target.value);
  };

  const handleFilterFields = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSetPerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPerPage(Number(e.target.value));
  };

  // Запоминаем данные, чтобы избежать лишних ререндеров, выводим на экран заданное кол-во юзеров
  const paginatedUsers = useMemo(() => {
    const start = (page - 1) * perPage;
    return filteredUsers.slice(start, start + perPage);
  }, [filteredUsers, page, perPage]);

  return (
    <div className="user-list-wrapper">
      {loading && <p>Загрузка...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {paginatedUsers.length ? (
        <>
          <div className="user-list-wrapper_toolbar">
            <Toolbar
              search={search}
              handleFilterFields={handleFilterFields}
              handleSortFields={handleSortFields}
              handleSetPerPage={handleSetPerPage}
            />
          </div>

          <ul className="user-list-wrapper_list">
            {paginatedUsers.map((user) => (
              <li key={user.id} className="user-list-wrapper_item">
                <span>{user.name}</span>
                <div className="user-list-wrapper_item_buttons">
                  <CommonButton onClick={() => handleSelectUser(user)}>
                    Подробнее
                  </CommonButton>
                </div>
              </li>
            ))}
          </ul>
          <div className="user-list-wrapper_buttons">
            <Pagination setPage={setPage} />
          </div>
        </>
      ) : (
        <>
          <div className="user-list-wrapper_toolbar">
            <Toolbar
              search={search}
              handleFilterFields={handleFilterFields}
              handleSortFields={handleSortFields}
              handleSetPerPage={handleSetPerPage}
            />
          </div>
          <p>Пользователи не найдены</p>
          <div className="user-list-wrapper_buttons">
            <Pagination setPage={setPage} />
          </div>
        </>
      )}
      {selectedUser && (
        <UserModal userInfo={selectedUser} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default UserList;
