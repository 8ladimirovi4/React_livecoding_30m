import CommonInput from "../../components/CommonInput/CommonInput";
import CommonSelect from "../../components/CommonSelect/CommonSelect";
import { ToolbarProps } from "./types";

const selectValues = [
  { name: "по имени", option: "name" },
  { name: "по email", option: "email" },
];
const selectItems = [
  { name: "2", option: "2" },
  { name: "4", option: "4" },
];


const Toolbar = ({
  search,
  setSortField,
  setSearch,
  setPerPage,
}: ToolbarProps) => {

  const handleSortFields = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortField(e.target.value);
  };

  const handleFilterFields = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSetPerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPerPage(Number(e.target.value));
  };

  return (
    <>
      <CommonInput
        type="text"
        placeholder="Поиск"
        value={search}
        inputAction={handleFilterFields}
      />
      <CommonSelect selectAction={handleSortFields} values={selectValues} />
      <CommonSelect selectAction={handleSetPerPage} values={selectItems} />
    </>
  );
};

export default Toolbar;
