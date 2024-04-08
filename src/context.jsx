import { useContext, useReducer, useEffect, createContext } from "react";

import reducer from "./reducer";

import {
    CLEAR_CART,
    REMOVE,
    INCREASE,
    DECREASE,
    LOADING,
    DISPLAY_ITEMS,
} from "./actions";

import cartItems from "./data";

// Creating the Context
const AppContext = createContext();

const initialState = {
    loading: false,
    cart: new Map(cartItems.map((item) => [item.id, item])),
};

// Component
export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const clearCart = () => {
        dispatch({ type: CLEAR_CART });
    };

    return (
        <AppContext.Provider value={{ ...state, clearCart }}>
            {children}
        </AppContext.Provider>
    );
};

// Hook
export const useGlobalContext = () => {
    return useContext(AppContext);
};
