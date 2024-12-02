import { CartItemType } from "./types";

const getTotals = (
    cart: Map<string, CartItemType>
): { totalNumberOfItems: number; totalCost: number } => {
    // const { totalNumberOfItems, totalCost } = Array.from(cart.values()).reduce(
    //     (totals, currentItem) => {
    //         const { amount, price } = currentItem;
    //         totals.totalNumberOfItems += amount;
    //         totals.totalCost += parseFloat(price) * amount;
    //         return totals;
    //     },
    //     { totalNumberOfItems: 0, totalCost: 0 }
    // );

    let totalNumberOfItems = 0;
    let totalCost = 0;

    for (const item of cart.values()) {
        totalNumberOfItems += item.amount;
        totalCost += item.amount * parseFloat(item.price);
    }

    return { totalNumberOfItems, totalCost };
};

export default getTotals;
