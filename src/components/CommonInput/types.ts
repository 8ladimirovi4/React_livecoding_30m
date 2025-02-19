export interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  inputAction: (e: React.ChangeEvent<HTMLInputElement>) => void;
  testId: string;
}
