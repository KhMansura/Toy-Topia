import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

export default function useAuth() {
  return useContext(AuthContext);
}
