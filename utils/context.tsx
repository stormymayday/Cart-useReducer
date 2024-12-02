"use client";

import {
    createContext,
    useContext,
    // useReducer,
    // useEffect,
    ReactNode,
} from "react";

interface AppContextInterface {
    greeting: string;
}

const AppContext = createContext<AppContextInterface>({ greeting: "" });

const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const greeting = "hello";

    return (
        <AppContext.Provider value={{ greeting }}>
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => {
    return useContext(AppContext);
};

export { AppContextProvider, useAppContext };
