interface ICategory {
    created_at: string,
    id: number,
    name: string,
    parent_id: number,
    children?: ICategory[],
}


export type { ICategory };