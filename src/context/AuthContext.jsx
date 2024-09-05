/* eslint-disable react/prop-types */
import { useMutation } from '@tanstack/react-query';
import { createContext, useState } from 'react';
import { login } from '../api/authApi';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const loginMutation = useMutation({
    mutationKey: ['login'],
    mutationFn: login,
    onError: () => alert('Hubo un error en el login'),
    onSuccess: () => alert('Login exitoso'),
  });

  return (
    <AuthContext.Provider value={{ user, loginMutation }}>
      {children}
    </AuthContext.Provider>
  );
};
