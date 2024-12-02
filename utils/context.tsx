/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { AppStateType } from "./types";
import cartItems from "@/utils/data";
import {
    CLEAR_CART,
    DECREASE,
    DISPLAY_ITEMS,
    INCREASE,
    LOADING,
    REMOVE,
} from "@/utils/actions";
import reducer from "@/utils/reducer";

import {
    createContext,
    useContext,
    useEffect,
    ReactNode,
    useReducer,
} from "react";

const initialState: AppStateType = {
    data: [],
    loading: false,
};

const AppContext = createContext(initialState);

const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
    return useContext(AppContext);
};

export { AppContextProvider, useAppContext };
