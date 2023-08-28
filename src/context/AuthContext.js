// // import React, { createContext } from "react";

// // export const AuthContext = createContext({
// //   user: null,
// //   login: () => {},
// //   logout: () => {},
// //   //   setUser: (e) => {console.log('setUser=> ',e)},
// // });

// import React, { createContext, useContext, useReducer } from "react";

// const AuthContext = createContext();

// const initialState = {
//   user: null,
//   isAuthenticated: false,
// };

// const authReducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       return {
//         user: action.payload,
//         isAuthenticated: true,
//       };
//     case "LOGOUT":
//       return {
//         user: null,
//         isAuthenticated: false,
//       };

//     default:
//       return state;
//   }
// };

// const AuthProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(authReducer, initialState);

//   return (
//     <AuthContext.Provider value={{ state, dispatch }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// const useAuth = () => useContext(AuthContext);

// const { dispatch } = useAuth();

// const login = (user) => {
//   localStorage.setItem("user", JSON.stringify(user));
//   dispatch({ type: "LOGIN", payload: user });
// };
// const logout = (user) => {
//   localStorage.removeItem("user");
//   dispatch({ type: "LOGIN" });
// };

// export { AuthProvider, useAuth };
