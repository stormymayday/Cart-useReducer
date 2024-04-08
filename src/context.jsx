import { useContext, useReducer, useEffect, createContext } from "react";

// Creating the Context
const AppContext = createContext();

// Component
export const AppProvider = ({ children }) => {
    const greeting = "hello";

    return (
        <AppContext.Provider value={{ greeting }}>
            {children}
        </AppContext.Provider>
    );
};

// Hook
export const useGlobalContext = () => {
    return useContext(AppContext);
};
