"use client";

import CartItem from "@/components/CartItem";
import { CartItemType } from "@/utils/types";
import { useAppContext } from "@/utils/context";

const CartContainer = () => {
    const { cart } = useAppContext();

    // Converting Map into an Array
    const cartArray: CartItemType[] = [...Array.from(cart.values())];

    if (cartArray.length === 0) {
        return (
            <section className="cart">
                {/* cart header */}
                <header>
                    <h2>your bag</h2>
                    <h4 className="empty-cart">is currently empty</h4>
                </header>
            </section>
        );
    }
    return (
        <section className="cart">
            {/* cart header */}
            <header>
                <h2>your bag</h2>
            </header>
            {/* cart items */}
            <div>
                {cartArray.map((cartItem) => {
                    return <CartItem key={cartItem.id} cartItem={cartItem} />;
                })}
            </div>
            {/* cart footer */}
            <footer>
                <hr />
                <div>
                    <h5 className="cart-total">
                        total <span>$10</span>
                    </h5>
                </div>
                <button
                    className="btn btn-hipster"
                    onClick={() => console.log("clear cart")}
                >
                    clear cart
                </button>
            </footer>
        </section>
    );
};

export default CartContainer;
