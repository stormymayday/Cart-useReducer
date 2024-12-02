import { AppStateType } from "./types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducer = (state: AppStateType, action: any) => {
    console.log(action);

    return state;
};

export default reducer;
