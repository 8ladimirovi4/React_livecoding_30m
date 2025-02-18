import CommonButton from "../../components/CommonButton/CommonButton";
import { PaginationProps } from "./types";

const Pagination = ({ setPage }: PaginationProps) => {
  return (
    <>
      <CommonButton onClick={() => setPage((p) => Math.max(p - 1, 1))}>
        Назад
      </CommonButton>
      <CommonButton onClick={() => setPage((p) => p + 1)}>Вперед</CommonButton>
    </>
  );
};

export default Pagination;
