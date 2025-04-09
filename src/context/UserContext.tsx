// context/UserContext.tsx
import { createContext, useContext, useState } from "react";
import usersData from "@/utils/users";
import { columnsBase } from "@/utils/users";
import { GridColDef } from "@mui/x-data-grid";
import { useEffect } from "react";

interface User {
  id: number;
  firstName: string | null;
  lastName: string | null;
  age: number;
}

export interface NewUser {
  firstName: string;
  lastName: string;
  age: string;
}

interface UserContextType {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<any>>;
  showForm: boolean;
  setShowForm: (val: boolean) => void;
  handleAddingUser: (newUser: NewUser) => void;
  columnsBase: GridColDef[];
  handleDelete: (id: number) => void;
  setSearchTerm: (term: string) => void;
  searchTerm: string;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState(usersData);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("data");
    if (!stored) {
      localStorage.setItem("data", JSON.stringify(usersData));
    } else {
      setUsers(JSON.parse(stored));
    }
  }, []);



  const handleAddingUser = (newUser: NewUser) => {
    if (!(newUser.firstName || !newUser.lastName) || !newUser.age) return;

    const updatedUsers = [
      {
        id: users.length ? users[users.length - 1].id + 1 : 1,
        ...newUser,
        age: parseInt(newUser.age),
      },
      ...users,
    ];
    setUsers(updatedUsers);
    localStorage.setItem("data", JSON.stringify(updatedUsers));
    setShowForm(false);
  };

  const handleDelete = (id: number) => {
    const filtered = users.filter((user) => user.id !== id);
    setUsers(filtered);
    localStorage.setItem("data", JSON.stringify(filtered));
  };

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        showForm,
        setShowForm,
        handleAddingUser,
        handleDelete,
        columnsBase,
        setSearchTerm,
        searchTerm
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context)
    throw new Error("useUserContext must be used within UserProvider");
  return context;
};
