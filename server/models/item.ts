export interface Item {
    id?: number,
    name: string,
    description: string,
    price: number,
    created_at?: Date,
    updated_at?: Date
}

export const isSendValid = (item: Item): boolean => {
    return (item.name != '' && item.description != '' && item.price != 0)
}