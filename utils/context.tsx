"use client";

import { AppStateType } from "./types";
import { fetchData } from "./fetchData";
import {
    CLEAR_CART,
    DECREASE,
    DISPLAY_ITEMS,
    INCREASE,
    LOADING,
    ERROR,
    REMOVE,
} from "@/utils/actions";
import reducer from "@/utils/reducer";
import getTotals from "./getTotals";

import {
    createContext,
    useContext,
    useEffect,
    ReactNode,
    useReducer,
} from "react";

const initialState: AppStateType = {
    cart: new Map(),
    loading: false,
    isError: false,
    errorMessage: "",
};

type AppContextType = {
    state: AppStateType;
    clearCart: () => void;
    removeItem: (id: string) => void;
    increaseAmount: (id: string) => void;
    decreaseAmount: (id: string) => void;
    totalNumberOfItems: number;
    totalCost: number;
    fetchItems: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const getData = async () => {
        dispatch({ type: LOADING, payload: { loading: true } });

        const { data, isError, errorMessage } = await fetchData(
            process.env.NEXT_PUBLIC_API_URL || ""
        );

        dispatch({
            type: DISPLAY_ITEMS,
            payload: { data },
        });

        dispatch({
            type: ERROR,
            payload: { isError: isError, errorMessage: errorMessage },
        });

        dispatch({ type: LOADING, payload: { loading: false } });
    };

    useEffect(() => {
        getData();
    }, []);

    const [state, dispatch] = useReducer(reducer, initialState);

    const { totalNumberOfItems, totalCost } = getTotals(state.cart);

    const fetchItems = () => {
        getData();
    };

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
                fetchItems,
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
