"use client";

import CartItem from "@/components/CartItem";
import { CartItemType } from "@/utils/types";
import { useAppContext } from "@/utils/context";

const CartContainer = () => {
    const { state, totalCost, clearCart, fetchItems } = useAppContext();

    // Converting Map into an Array
    const cartArray: CartItemType[] = [...Array.from(state.cart.values())];

    if (cartArray.length === 0) {
        return (
            <section className="cart">
                {/* cart header */}
                <header>
                    <h2>your bag</h2>
                    <h4 className="empty-cart">is currently empty</h4>
                    <div className="flex justify-center items-center mt-10">
                        <button
                            type="button"
                            className="btn"
                            onClick={fetchItems}
                        >
                            fetch items
                        </button>
                    </div>
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
                        total <span>${totalCost.toFixed(2)}</span>
                    </h5>
                </div>
                <button className="btn btn-hipster" onClick={clearCart}>
                    clear cart
                </button>
            </footer>
        </section>
    );
};

export default CartContainer;
