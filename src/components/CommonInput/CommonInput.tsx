import { InputProps } from "./types";

const CommonInput = ({
  type = "",
  placeholder = "",
  value = "",
  inputAction = () => {},
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={inputAction}
    />
  );
};

export default CommonInput;
