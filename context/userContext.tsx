import React, { createContext, useState } from "react";

// ✅ 1. Définir le type du contexte
type UserContextType = {
  user: any | null;
  login: (userData: any) => void;
  logout: () => void;
  isAuthenticated?: boolean;
};

// ✅ 2. Créer le contexte avec un type explicite (valeur initiale null)
export const UserContext = createContext<UserContextType | null>(null);

export default function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const login = (userData: any) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <UserContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
}
