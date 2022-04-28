import api from "./apiService";

export const searchProducts = async(query) => {
    const searchParams = new URLSearchParams({
        query
    });

    const { data } = await api.get(`/search?${searchParams}`);
    return data;
}