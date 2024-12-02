"use client";

import { FaCartPlus } from "react-icons/fa";
import { useAppContext } from "@/utils/context";

const Navbar = () => {
    const { totalNumberOfItems } = useAppContext();
    return (
        <nav>
            <div className="nav-center">
                <h4>useReducer</h4>
                <div className="nav-container">
                    <FaCartPlus className="cart-icon" />
                    <div className="amount-container">
                        <p className="total-amount">{totalNumberOfItems}</p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
