import { CartItemType } from "@/utils/types";

interface FetchDataResult {
    data: CartItemType[];
    isError: boolean;
    errorMessage: string;
}

export const fetchData = async (url: string): Promise<FetchDataResult> => {
    const apiUrl = url;

    if (!apiUrl) {
        return {
            data: [],
            isError: true,
            errorMessage: "Failed to fetch data",
        };
    }

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            return {
                data: [],
                isError: true,
                errorMessage: "Failed to fetch data",
            };
        }

        const data: CartItemType[] = await response.json();

        return {
            data: data,
            isError: false,
            errorMessage: "",
        };
    } catch (error) {
        const errorMsg =
            error instanceof Error
                ? error.message
                : "Oops! Something went wrong!";

        return {
            data: [],
            isError: true,
            errorMessage: errorMsg,
        };
    }
};
