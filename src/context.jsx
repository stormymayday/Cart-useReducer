import { useContext, useReducer, useEffect, createContext } from "react";

// Creating the Context
const AppContext = createContext();

// Reducer function
const reducer = (state, action) => {
    return state;
};

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
