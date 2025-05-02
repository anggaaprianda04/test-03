import type { ICategory } from "../types/Category";
import type { IProduct } from "../types/Product";

export function countProductsRecursive(category: ICategory, allProducts: IProduct[]): number {
    if (!allProducts) return 0;

    const productCount = allProducts.filter(p => p.category_id === category.id).length

    const childrenCount = (category.children || []).reduce((sum, child) => {
        return sum + countProductsRecursive(child, allProducts)
    }, 0)

    return productCount + childrenCount
}

export function sumProductPricesRecursive(category: ICategory, allProducts: IProduct[]): number {
    if (!allProducts) return 0; 

    const directProducts = allProducts.filter(p => p.category_id === category.id)
    const directTotal = directProducts.reduce((sum, p) => sum + p.price * p.quantity, 0)

    const childrenTotal = (category.children || []).reduce((sum, child) => {
        return sum + sumProductPricesRecursive(child, allProducts)
    }, 0)

    return directTotal + childrenTotal
}
