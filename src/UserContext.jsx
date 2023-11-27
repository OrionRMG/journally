import { createContext, useContext } from "react";
import { useUserData } from "./components/hooks/useUserData";

const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export function UserContextProvider({ children }) {
  const userData = useUserData();

  if (userData.isError) {
    return userData.error;
  }

  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
}
