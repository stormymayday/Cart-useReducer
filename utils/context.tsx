"use client";

import { AppStateType } from "./types";
import cartItems from "@/utils/data";
import {
    CLEAR_CART,
    DECREASE,
    // DISPLAY_ITEMS,
    INCREASE,
    // LOADING,
    REMOVE,
} from "@/utils/actions";
import reducer from "@/utils/reducer";
import getTotals from "./getTotals";

import {
    createContext,
    useContext,
    // useEffect,
    ReactNode,
    useReducer,
} from "react";

const initialState: AppStateType = {
    cart: new Map(cartItems.map((item) => [item.id, item])),
    loading: false,
};

type AppContextType = {
    state: AppStateType;
    clearCart: () => void;
    removeItem: (id: string) => void;
    increaseAmount: (id: string) => void;
    decreaseAmount: (id: string) => void;
    totalNumberOfItems: number;
    totalCost: number;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const { totalNumberOfItems, totalCost } = getTotals(state.cart);

    const clearCart = () => {
        dispatch({ type: CLEAR_CART });
    };

    const removeItem = (id: string) => {
        dispatch({ type: REMOVE, payload: { id } });
    };

    const increaseAmount = (id: string) => {
        dispatch({ type: INCREASE, payload: { id } });
    };

    const decreaseAmount = (id: string) => {
        dispatch({ type: DECREASE, payload: { id } });
    };

    return (
        <AppContext.Provider
            value={{
                state,
                clearCart,
                removeItem,
                increaseAmount,
                decreaseAmount,
                totalNumberOfItems,
                totalCost,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("context is undefined");
    }
    return context;
};

export { AppContextProvider, useAppContext };
