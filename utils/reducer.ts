/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppStateType } from "./types";
import {
    CLEAR_CART,
    DECREASE,
    DISPLAY_ITEMS,
    INCREASE,
    LOADING,
    REMOVE,
} from "@/utils/actions";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducer = (state: AppStateType, action: any) => {
    console.log(action);

    return state;
};

export default reducer;
