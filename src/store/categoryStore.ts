import { defineStore } from "pinia";
import { getCategories } from "../services/categoryService";
import type { ICategory } from "../types/Category";
import { buildCategoryTree } from "../utils/buildCategoryTree";

export const useCategoryStore = defineStore('category', {
    state: () => ({
        categories: [] as ICategory[],
        categoryTree: [] as ICategory[],
        isLoading: false,
        error: null as string | null,
    }),
    actions: {
        async fetchCategories() {
            this.isLoading = true;
            try {
                const data = await getCategories();
                this.categories = data.categories;
                this.categoryTree = buildCategoryTree(this.categories)
            } catch (err: any) {
                this.error = err.message || "Failed to fetch categories"
            } finally {
                this.isLoading = false;
            }
        }
    }
})