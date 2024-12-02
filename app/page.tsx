"use client";

import Navbar from "@/components/Navbar";
import CartContainer from "@/components/CartContainer";
import { useAppContext } from "@/utils/context";

export default function Home() {
    const { state } = useAppContext();

    if (state.loading) {
        return (
            <main>
                <div className="loading"></div>
            </main>
        );
    }

    if (state.isError) {
        return (
            <main>
                <div>
                    <h1>{state.errorMessage}</h1>
                </div>
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
