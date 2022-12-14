import { createContext, useState } from "react";

const Provider = ({ children }) => {
  /* const [Starships, setStarshisps] = useState([]); */
  const [Characters, setCharacters] = useState([]);
  const [TotalNumberItemsPages, setTotalNumberItemsPages] = useState(1);
  return (
    <AppContext.Provider
      value={[Characters, setCharacters, TotalNumberItemsPages, setTotalNumberItemsPages]}>
      {children}
    </AppContext.Provider>
  );
};
export default Provider;
export const AppContext = createContext();
