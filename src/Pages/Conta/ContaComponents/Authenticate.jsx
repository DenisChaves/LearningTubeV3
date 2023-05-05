import { createContext, useState } from "react";
import { api } from "./api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user] = useState(null);

  const signIn = async ({ login, password }) => {
    const request = await api.post("/login", { login, password });

    if (request.data.message) {
      alert(request.data.message);
    } 
  };

  return (
    <AuthContext.Provider value={{ user, signed: !!user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
