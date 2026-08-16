import { createContext } from 'react';

interface AuthContextData {
  isLoggedon: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);