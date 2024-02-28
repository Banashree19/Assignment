import { createContext, useContext, useState } from "react";

const AppContext = createContext();
// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("mountains");
  return (
    <AppContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => useContext(AppContext);
