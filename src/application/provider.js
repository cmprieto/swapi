import React from 'react';
import { createContext, useContext, useState } from "react";

export const AppContext = createContext();
export const useCartContext = () => useContext(AppContext);

const Provider = ({ children }) => {

  const [Characters, setCharacters] = useState([]);
  const [TotalNumberItemsPages, setTotalNumberItemsPages] = useState(1);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [user, setUser] = useState('');

  return (
    <AppContext.Provider
      value={{ Characters, setCharacters, TotalNumberItemsPages, setTotalNumberItemsPages, showLogin, setShowLogin, showRegister, setShowRegister, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};
export default Provider;
