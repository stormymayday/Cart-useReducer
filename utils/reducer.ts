import { AppStateType } from "./types";
import {
    CLEAR_CART,
    DECREASE,
    // DISPLAY_ITEMS,
    INCREASE,
    // LOADING,
    REMOVE,
} from "@/utils/actions";

const MAX_ITEM_LIMIT = 10;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducer = (state: AppStateType, action: any) => {
    // console.log(action);

    if (action.type === CLEAR_CART) {
        return { ...state, cart: new Map() };
    }

    if (action.type === REMOVE) {
        // Creating a new Map instance and passing current state value
        const newCart = new Map(state.cart);
        // Deleting an item
        newCart.delete(action.payload.id);
        // Spreading the state object and overwriting cart value
        return { ...state, cart: newCart };
    }

    if (action.type === INCREASE) {
        // Creating a new Map instance and passing current state value
        const newCart = new Map(state.cart);

        // Increasing item amount
        const itemId = action.payload.id;
        const item = newCart.get(itemId);
        if (item) {
            if (item.amount < MAX_ITEM_LIMIT) {
                const newAmount = item.amount + 1;
                const updatedItem = { ...item, amount: newAmount };
                newCart.set(itemId, updatedItem);
            }
        }

        // Spreading the state object and overwriting cart value
        return { ...state, cart: newCart };
    }

    if (action.type === DECREASE) {
        // Creating a new Map instance and passing current state value
        const newCart = new Map(state.cart);

        // Decreasing item amount
        const itemId = action.payload.id;
        const item = newCart.get(itemId);
        if (item) {
            if (item.amount === 1) {
                // deleting the item
                newCart.delete(itemId);
            } else {
                const newAmount = item.amount - 1;
                const updatedItem = { ...item, amount: newAmount };
                newCart.set(itemId, updatedItem);
            }
        }

        // Spreading the state object and overwriting cart value
        return { ...state, cart: newCart };
    }

    // return state;
    throw new Error(`No matching action type: ${action.type}`);
};

export default reducer;
