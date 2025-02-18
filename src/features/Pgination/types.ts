import { UserType } from "../../components/UserList/types";

export interface PaginationProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  paginatedUsers: UserType[]
}
