import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export function useAuth() {
  //const { user, loginGoogle } = useContext(AuthContext)

  return useContext(AuthContext)
}