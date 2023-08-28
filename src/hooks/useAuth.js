import { useEffect } from "react";
import { useUser } from "./useUser";
import { useLocalStorage } from "./useLocalStorage";

export const useAuth = () => {
  const { user, addUser, removeUser } = useUser();
  const { getItem } = useLocalStorage();

  const login = (user) => {
    console.log("loging in");
    addUser(user);
  };

  const logout = () => {
    console.log("loging out");
    removeUser();
  };

  useEffect(() => {
    const user = getItem("user");
    console.log("user=> ", user);
    if (user) {
      addUser(JSON.parse(user));
    }
  }, [user, login, logout]);

  //   const setUser = () => {
  //     console.log("fu");
  //   };

  return { user, login, logout };
  //   return { user, login, logout, setUser };
};
