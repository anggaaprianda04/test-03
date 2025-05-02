import type { ICategory } from "../types/Category";
import type { IProduct } from "../types/Product";

export function countProductsRecursive(category: ICategory, allProducts: IProduct[]): number {
    if (!allProducts) return 0; // ✅ cegah error

    // Hitung produk di kategori ini
    const productCount = allProducts.filter(p => p.category_id === category.id).length

    // Hitung produk di semua subkategori secara rekursif
    const childrenCount = (category.children || []).reduce((sum, child) => {
        return sum + countProductsRecursive(child, allProducts)
    }, 0)

    return productCount + childrenCount
}

export function sumProductPricesRecursive(category: ICategory, allProducts: IProduct[]): number {
    if (!allProducts) return 0; // ✅ cegah error

    // Hitung total harga di kategori ini
    const directProducts = allProducts.filter(p => p.category_id === category.id)
    const directTotal = directProducts.reduce((sum, p) => sum + p.price * p.quantity, 0)

    // Hitung total harga dari subkategori
    const childrenTotal = (category.children || []).reduce((sum, child) => {
        return sum + sumProductPricesRecursive(child, allProducts)
    }, 0)

    return directTotal + childrenTotal
}