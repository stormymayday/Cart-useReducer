"use client";

import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { CartItemType } from "@/utils/types";
import Image from "next/image";
import { useAppContext } from "@/utils/context";

interface CartItemProps {
    cartItem: CartItemType;
}

const CartItem = ({ cartItem }: CartItemProps) => {
    const { removeItem, increaseAmount, decreaseAmount } = useAppContext();

    const { id, img, title, price, amount } = cartItem;

    return (
        <article className="cart-item">
            <Image src={img} alt={title} width={80} height={80} />
            <div>
                <h5>{title}</h5>
                <span className="item-price">${price}</span>
                {/* remove button */}
                <button className="remove-btn" onClick={() => removeItem(id)}>
                    remove
                </button>
            </div>
            <div>
                {/* increase amount */}
                <button
                    className="amount-btn"
                    onClick={() => increaseAmount(id)}
                >
                    <FaChevronUp className="amount-icon" />
                </button>
                {/* amount */}
                <span className="amount">{amount}</span>
                {/* decrease amount */}
                <button
                    className="amount-btn"
                    onClick={() => decreaseAmount(id)}
                >
                    <FaChevronDown className="amount-icon" />
                </button>
            </div>
        </article>
    );
};

export default CartItem;
