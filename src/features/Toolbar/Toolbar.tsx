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
  handleFilterFields,
  handleSortFields,
  handleSetPerPage,
}: ToolbarProps) => {
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
