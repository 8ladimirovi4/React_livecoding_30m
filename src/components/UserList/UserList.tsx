import "./styles.css";
import { useState, useEffect, useCallback, useMemo } from "react";
import { UserListProps, UserType } from "./types";
import UserModal from "../UserModal/UserModal";
import Toolbar from "../../features/Toolbar/Toolbar";
import Pagination from "../../features/Pgination/Pagination";
import User from "../User/User";

const UserList = ({ theme }: UserListProps) => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<UserType[]>([]);
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");
  const [sortField, setSortField] = useState("name");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(2);

  // Фетчинг пользователей с кэшированием
  useEffect(() => {
    const fetchUsers = async () => {
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

  // Запоминаем данные, чтобы избежать лишних ререндеров, выводим на экран заданное кол-во юзеров
  const paginatedUsers = useMemo(() => {
    const start = (page - 1) * perPage;
    return filteredUsers.slice(start, start + perPage);
  }, [filteredUsers, page, perPage]);

  // if (loading) return <p>Загрузка...</p>;
  // if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div
      className={
        theme === "light"
          ? "user-list-wrapper"
          : "user-list-wrapper" + " " + "user-list-wrapper-dark"
      }
    >
      <div className="user-list-wrapper_toolbar">
        <Toolbar
          search={search}
          setSortField={setSortField}
          setSearch={setSearch}
          setPerPage={setPerPage}
        />
      </div>
      <div className="user-list-wrapper_buttons">
        <Pagination paginatedUsers={paginatedUsers} setPage={setPage} />
      </div>
      {paginatedUsers.length ? (
        <User
          paginatedUsers={paginatedUsers}
          handleSelectUser={handleSelectUser}
        />
      ) : (
        <p>Пользователи не найдены</p>
      )}

      {selectedUser && (
        <UserModal userInfo={selectedUser} onClose={handleCloseModal} />
      )}
    </div>
  );
};
export default UserList;
