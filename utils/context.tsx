"use client";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CartItemType, AppStateType } from "./types";

// import cartItems from "@/utils/data";
import reducer from "@/utils/reducer";

import {
    createContext,
    useContext,
    // useReducer,
    // useEffect,
    ReactNode,
    useReducer,
} from "react";

const initialState: AppStateType = {
    data: [],
    loading: false,
};

const AppContext = createContext(initialState);

const AppContextProvider = ({ children }: { children: ReactNode }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [state, dispatch] = useReducer(reducer, initialState);

    return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
    return useContext(AppContext);
};

export { AppContextProvider, useAppContext };
