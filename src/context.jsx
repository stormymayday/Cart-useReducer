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
const url = "https://www.course-api.com/react-useReducer-cart-project";

// Creating the Context
const AppContext = createContext();

const initialState = {
    loading: false,
    cart: new Map(),
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

    const fetchData = async () => {
        dispatch({ type: LOADING });
        const response = await fetch(url);
        const cart = await response.json();
        // console.log(cart);
        dispatch({ type: DISPLAY_ITEMS, payload: { cart } });
    };

    useEffect(() => {
        fetchData();
    }, []);

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
