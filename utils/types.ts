export type CartItemType = {
    id: string;
    title: string;
    price: string;
    img: string;
    amount: number;
};

export type AppStateType = {
    cart: Map<string, CartItemType>;
    loading: boolean;
    isError: boolean;
    errorMessage: string;
};
