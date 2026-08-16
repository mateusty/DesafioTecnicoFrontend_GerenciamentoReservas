import { useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import api from "../Service/api";
import { toast } from "react-toastify";

export const AuthProvider = ({ children }: { children: ReactNode }) => {

  const [isLoggedon, setIsLoggedon] = useState<boolean>(false);

  async function signIn(email: string, password: string) {
    await api.post('/auth/login', { Username: email, Password: password });
    toast.success("Usuário conectou com sucesso!")
    setIsLoggedon(true);
  }

  async function signOut() {
    await api.post('/auth/logout');
    setIsLoggedon(false);
  }

  async function register(email: string, password: string) {
    await api.post("/auth/register", {Username: email, Password: password})
  }

  return (
    <AuthContext.Provider value={{ isLoggedon, signIn, signOut, register }}>
      {children}
    </AuthContext.Provider>
  );
};