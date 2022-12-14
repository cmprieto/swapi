import { createContext, useState } from 'react';

const Provider = ({ children }) => {
    const [Characters, setCharacters] = useState([]);
    const [currPage, setCurrPage] = useState(5);

    return (
        <AppContext.Provider value={[Characters, setCharacters, currPage, setCurrPage]}>
            {children}
        </AppContext.Provider>
    );
}

export default Provider;
export const AppContext = createContext();