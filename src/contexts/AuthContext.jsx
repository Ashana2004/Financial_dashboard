import React, { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [role, setRole] = useLocalStorage('finance_role', 'admin'); // 'admin' or 'viewer'

  const isAdmin = role === 'admin';

  return (
    <AuthContext.Provider value={{ role, setRole, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};
