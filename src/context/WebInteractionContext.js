import React, { createContext, useContext, useState } from "react";

const WebInteractionContext = createContext();

export function useWebInteraction() {
  return useContext(WebInteractionContext);
}

export function WebInteractionProvider({ children }) {
  const [WebInteraction, setWebInteraction] = useState({});

  const updateWebInteraction = (data) => {
    // console.log("hi=:> ", WebInteraction);
    setWebInteraction(data);
  };

  return (
    <WebInteractionContext.Provider
      value={{ WebInteraction, updateWebInteraction }}
    >
      {children}
    </WebInteractionContext.Provider>
  );
}
