import {type Item} from '~/server/models/item'
import { type ApiResponse } from '~/utils/requests'

export const postItem = async (form: Item): Promise<ApiResponse<Item>> => {
    const { name, description, price } = form 
    const { data } = await useFetch<ApiResponse<Item>>(`/api/items`, {
        method: 'post',
        body: {
            name,
            description,
            price
        }
    })

    return data.value!
}

export const getItems =async (): Promise<ApiResponse<Item[]> | null> => {
    const {data} = await useFetch<ApiResponse<Item[]>>(`/api/items`)
    return data.value
}

export const getItemById = async (id: number): Promise<ApiResponse<Item>> => {
    const { data } = await useFetch<ApiResponse<Item>>(`/api/items/${id}`)
    return data.value!
}

export const updateItemById = async (id: number, data: Item): Promise<ApiResponse<Item>> => {
    const { data: updateData } = await useFetch<ApiResponse<Item>>(`/api/items/${id}`, {
        method: 'PUT',
        body: {
            ...data
        }
    })

    return updateData.value!
}

export const deleteItemById = async(id: number): Promise<ApiResponse<Item>> => {
    const {data} = await useFetch<ApiResponse<Item>>(`/api/items/${id}`, {
        method: 'DELETE'
    })

    return data.value!
}



export default function () {

    return {   
        getItems,
        getItemById,
        postItem,
        updateItemById,
        deleteItemById
    }
}

