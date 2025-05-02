import { defineStore } from "pinia";
import { getProducts } from "../services/productService";
import type { IProduct } from "../types/Product";

export const useProductStore = defineStore('product', {
    state: () => ({
        products: [] as IProduct[],
        isLoading: false,
        error: null as string | null,
    }),
    actions: {
        async fetchProducts() {
            this.isLoading = true;
            try {
                const data = await getProducts();
                this.products = data.products;
            } catch (err: any) {
                this.error = err.message || 'Failed to fetch products';
            } finally {
                this.isLoading = false;
            }
        }
    }
})