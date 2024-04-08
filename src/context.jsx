import { useContext, useReducer, useEffect, createContext } from "react";

import reducer from "./reducer";

import { getTotals } from "./utils.js";

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
    // State setup
    const [state, dispatch] = useReducer(reducer, initialState);

    //
    const { totalAmount, totalCost } = getTotals(state.cart);

    const clearCart = () => {
        dispatch({ type: CLEAR_CART });
    };

    const removeItem = (id) => {
        dispatch({ type: REMOVE, payload: { id } });
    };

    const increaseAmount = (id) => {
        dispatch({ type: INCREASE, payload: { id } });
    };

    const decreaseAmount = (id) => {
        dispatch({ type: DECREASE, payload: { id } });
    };

    return (
        <AppContext.Provider
            value={{
                ...state,
                clearCart,
                removeItem,
                increaseAmount,
                decreaseAmount,
                totalAmount,
                totalCost,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

// Hook
export const useGlobalContext = () => {
    return useContext(AppContext);
};
