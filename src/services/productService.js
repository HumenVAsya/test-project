import { fetchData } from "../apiService";

const PRODUCTS_URL = "/api/products.json";

export const fetchProducts = async () => {
  return fetchData(PRODUCTS_URL);
};
