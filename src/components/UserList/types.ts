export interface UserListProps {
  theme: string;
}

export interface UserType {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
}

export type SortableFields = Extract<
  keyof UserType,
  "name" | "email" | "phone"
>;
