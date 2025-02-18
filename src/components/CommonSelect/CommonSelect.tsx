import { SelectProps } from "./types";

const CommonSelect = ({
  values = [],
  selectAction = () => {},
}: SelectProps) => {
  return (
    <select onChange={selectAction}>
      {values.map((value, idx) => (
        <option key={idx} value={value.option}>
          {value.name}
        </option>
      ))}
    </select>
  );
};

export default CommonSelect;
