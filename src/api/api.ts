import { Site, Test } from "../types";
import { API_ROUTES } from "./constants";

export const getSites = async () => {
    try {
        const response = await fetch(API_ROUTES.SITES);
        const result = await response.json();
        return result as Site[];
    } catch (error) {
        console.error(error);
    }
};

export const getTests = async () => {
    try {
        const response = await fetch(API_ROUTES.TESTS);
        const result = await response.json();
        return result as Test[];
    } catch (error) {
        console.error(error);
    }
};

export const getTest = async (id: string) => {
    try {
        const response = await fetch(API_ROUTES.TEST(id));
        const result = await response.json();
        return result as Test;
    } catch (error) {
        console.error(error);
    }
};