import { useContext, useReducer, useEffect, createContext } from "react";

import reducer from "./reducer";

// Creating the Context
const AppContext = createContext();

const initialState = {
    loading: false,
    cart: [],
};

// Component
export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ ...state }}>
            {children}
        </AppContext.Provider>
    );
};

// Hook
export const useGlobalContext = () => {
    return useContext(AppContext);
};
