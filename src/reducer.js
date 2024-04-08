import {
    CLEAR_CART,
    REMOVE,
    INCREASE,
    DECREASE,
    LOADING,
    DISPLAY_ITEMS,
} from "./actions";

// Reducer function
const reducer = (state, action) => {
    if (action.type === CLEAR_CART) {
        return { ...state, cart: new Map() };
    }

    throw new Error(`no matching action type: ${action}`);
};

export default reducer;
