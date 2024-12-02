"use client";

import { AppStateType } from "./types";
import cartItems from "@/utils/data";
import {
    CLEAR_CART,
    // DECREASE,
    // DISPLAY_ITEMS,
    // INCREASE,
    // LOADING,
    REMOVE,
} from "@/utils/actions";
import reducer from "@/utils/reducer";

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
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const clearCart = () => {
        dispatch({ type: CLEAR_CART });
    };

    const removeItem = (id: string) => {
        dispatch({ type: REMOVE, payload: { id } });
        // console.log(id);
    };

    return (
        <AppContext.Provider value={{ state, clearCart, removeItem }}>
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
