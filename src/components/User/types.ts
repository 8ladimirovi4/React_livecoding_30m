import { UserType } from "../UserList/types";

export interface UserProps {
  paginatedUsers: UserType[];
  handleSelectUser: (user: UserType) => void;
}
