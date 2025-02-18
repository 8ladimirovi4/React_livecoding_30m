interface selectValue {
  name: string;
  option: string;
}

export interface SelectProps {
  values: selectValue[];
  selectAction: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
