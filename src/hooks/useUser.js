// import { useContext } from "react";
// import { useLocalStorage } from "./useLocalStorage";
// import { AuthContext } from "../context/AuthContext";

// export const useUser = () => {
//   const { user, login, logout } = useContext(AuthContext);
//   const { setItem } = useLocalStorage();

//   const addUser = (user) => {
//     user = user;
//     setItem("user", JSON.stringify(user));
//     login(user);
//   };

//   const removeUser = () => {
//     user = null;
//     console.log("removeUser");
//     setItem("user", "");
//     logout();
//   };
//   return { user, addUser, removeUser };
// };

import { useContext } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { UserContext } from "../context/UserContext";

export const useUser = () => {
  const { user, login, logout } = useContext(UserContext);
  const { setItem } = useLocalStorage();

  const addUser = (user) => {
    user = user;
    setItem("user", JSON.stringify(user));
    login(user);
  };

  const removeUser = () => {
    console.log("removeUser");
    setItem("user", "");
    logout();
  };
  return { user, addUser, removeUser };
};
