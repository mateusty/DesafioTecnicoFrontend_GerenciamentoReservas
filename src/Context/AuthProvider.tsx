import { useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import api from "../Service/api";
import { toast } from "react-toastify";

export const AuthProvider = ({ children }: { children: ReactNode }) => {

  const [isLoggedon, setIsLoggedon] = useState<boolean>(false);

  async function signIn(email: string, password: string) {
    try {
      const response = await api.post('/auth/login', { Email: email, Password: password });
      
      if(response.status == 200) {
        toast.success("Usuário conectou com sucesso!")
        setIsLoggedon(true);
      }
    } catch(error) {
      console.error(error);
      toast.error("Ocorreu um erro durante o login")
      setIsLoggedon(false);
    }
  }

  async function signOut() {
    await api.post('/auth/logout');
    setIsLoggedon(false);
  }

  async function register(email: string, password: string) {
    try {
      const response = await api.post("/auth/register", {Email: email, Password: password})

      if (response.status == 200) {
        toast.success("Usuário registrado com sucesso!")
      }
    } catch(error) {
      console.error(error);
      toast.error("Ocorreu um erro durante o registro")
    }
  }

  return (
    <AuthContext.Provider value={{ isLoggedon, signIn, signOut, register }}>
      {children}
    </AuthContext.Provider>
  );
};