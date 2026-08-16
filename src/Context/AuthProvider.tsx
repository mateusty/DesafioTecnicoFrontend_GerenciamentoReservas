import { useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import api from "../Service/api";

export const AuthProvider = ({ children }: { children: ReactNode }) => {

  const [isLoggedon, setIsLoggedon] = useState<boolean>(false);

  async function signIn(email: string, password: string) {
    await api.post('/auth/login', { Username: email, Password: password });
    setIsLoggedon(true);
  }

  async function signOut() {
    await api.post('/auth/logout');
    setIsLoggedon(false);
  }

  return (
    <AuthContext.Provider value={{ isLoggedon, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};