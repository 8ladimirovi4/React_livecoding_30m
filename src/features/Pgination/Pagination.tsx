import CommonButton from "../../components/CommonButton/CommonButton";
import { PaginationProps } from "./types";

const Pagination = ({ setPage, paginatedUsers }: PaginationProps) => {
  return (
    <>
      <CommonButton onClick={() => setPage((p) => Math.max(p - 1, 1))}>
        Назад
      </CommonButton>
      <CommonButton
        onClick={() => {
          if (paginatedUsers && paginatedUsers.length) setPage((p) => p + 1);
        }}
      >
        Вперед
      </CommonButton>
    </>
  );
};

export default Pagination;
