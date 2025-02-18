import CommonButton from "../../components/CommonButton/CommonButton";
import { PaginationProps } from "./types";

const Pagination = ({ setPage, paginatedUsers }: PaginationProps) => {
  const hendleNextPage = () => {
    if (paginatedUsers && paginatedUsers.length) setPage((p) => p + 1);
  };

  const hendlePrevPage = () => {
    setPage((p) => Math.max(p - 1, 1));
  };

  return (
    <>
      <CommonButton onClick={hendlePrevPage}>Назад</CommonButton>
      <CommonButton onClick={hendleNextPage}>Вперед</CommonButton>
    </>
  );
};

export default Pagination;
