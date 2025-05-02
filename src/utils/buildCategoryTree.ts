import type { ICategory } from "../types/Category";

export function buildCategoryTree(categories: ICategory[]): ICategory[] {
    const map = new Map<number, ICategory>()

    categories.forEach(cat => {
        map.set(cat.id, { ...cat, children: [] })
    })

    const tree: ICategory[] = []

    categories.forEach(cat => {
        const node = map.get(cat.id)!
        if (cat.parent_id === null) {
            tree.push(node)
        } else {
            const parent = map.get(cat.parent_id)
            if (parent) {
                parent.children?.push(node)
            }
        }
    })

    return tree
}