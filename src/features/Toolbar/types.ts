export interface ToolbarProps {
  search: string;
  handleFilterFields: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSortFields: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSetPerPage: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
