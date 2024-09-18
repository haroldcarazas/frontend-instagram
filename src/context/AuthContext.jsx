/* eslint-disable react/prop-types */
import { useMutation } from '@tanstack/react-query';
import { createContext, useState } from 'react';
import { login } from '../api/authApi';
import { useLocation } from 'wouter';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [, navigate] = useLocation();

  const loginMutation = useMutation({
    mutationKey: ['login'],
    mutationFn: login,
    onError: error => {
      console.log(error.response.data.message);
    },
    onSuccess: data => {
      localStorage.setItem('authToken', data.token);
      navigate('/dashboard');
    },
  });

  const setUserData = data => {
    setUser(data);
  };

  return (
    <AuthContext.Provider value={{ user, loginMutation, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};
