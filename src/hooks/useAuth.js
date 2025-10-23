// // src/hooks/useAuth.js
// import { useContext } from "react";
// import { AuthContext } from "../Providers/AuthProviders";

// const useAuth = () => {
//   const context = useContext(AuthContext);
//   return context;
// };

// export default useAuth;
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

export default function useAuth() {
  return useContext(AuthContext);
}
