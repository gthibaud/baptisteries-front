import React, { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalContextProvider({ children }) {
  // TODO : ask which language has to be set by default
  const [language, setLanguage] = useState("it");

  return (
    <GlobalContext.Provider value={{ language, setLanguage }}>
      {children}
    </GlobalContext.Provider>
  );
}
