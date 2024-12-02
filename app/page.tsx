"use client";

import Navbar from "@/components/Navbar";
import CartContainer from "@/components/CartContainer";
import { useAppContext } from "@/utils/context";

export default function Home() {
    const { state } = useAppContext();

    if (state.loading) {
        return (
            <main className="flex flex-col justify-center items-center h-screen">
                <div className="loading"></div>
            </main>
        );
    }

    if (state.isError) {
        return (
            <main className="flex flex-col justify-center items-center h-screen">
                <h1>{state.errorMessage}</h1>
            </main>
        );
    }

    return (
        <main>
            <Navbar />
            <CartContainer />
        </main>
    );
}
