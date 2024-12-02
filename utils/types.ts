export type CartItemType = {
    id: string;
    title: string;
    price: string;
    img: string;
    amount: number;
};

export type AppStateType = {
    data: CartItemType[];
    loading: boolean;
};
