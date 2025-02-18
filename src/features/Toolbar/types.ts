export interface ToolbarProps {
  search: string;
  setSortField: React.Dispatch<React.SetStateAction<string>>,
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setPerPage: React.Dispatch<React.SetStateAction<number>>;
}