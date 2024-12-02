import { AppStateType } from "./types";
import {
    CLEAR_CART,
    // DECREASE,
    // DISPLAY_ITEMS,
    // INCREASE,
    // LOADING,
    REMOVE,
} from "@/utils/actions";

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

    // return state;
    throw new Error(`No matching action type: ${action.type}`);
};

export default reducer;
