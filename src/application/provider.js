import React from 'react';
import { createContext, useContext, useState } from "react";

export const AppContext = createContext();
export const useCartContext = () => useContext(AppContext);

const Provider = ({ children }) => {

  const [Characters, setCharacters] = useState([]);
  const [TotalNumberItemsPages, setTotalNumberItemsPages] = useState(1);
  const [shows, setShows] = useState(false);
  const [showUp, setShowUp] = useState(false);

  return (
    <AppContext.Provider
      value={{ Characters, setCharacters, TotalNumberItemsPages, setTotalNumberItemsPages, shows, setShows, showUp, setShowUp }}>
      {children}
    </AppContext.Provider>
  );
};
export default Provider;
