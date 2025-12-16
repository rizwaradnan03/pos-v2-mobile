import { errorApiFunction } from "@/lib/error"
import { ApiManager, ApiManagerWithoutToken } from "./api-manager"
import { CreateOrderType } from "@/interfaces/dto/order.dto"

const baseUrl = "/order"
export const FetchFindManyOrder = async () => {
    try {
        const fetch = await ApiManager(`${baseUrl}`)

        return fetch.data
    } catch (error) {
        errorApiFunction({error: error})
    }
}

export const FetchFindByIdOrder = async ({id}: {id: string}) => {
    try {
        const fetch = await ApiManager(`${baseUrl}/${id}`)

        return fetch.data
    } catch (error) {
        errorApiFunction({error: error})
    }
}

export const CreateOrder = async ({data}: {data: CreateOrderType}) => {
    try {
        const create = await ApiManagerWithoutToken(`${baseUrl}/`, {
            method: "POST",
            data: data
        })

        return create.data
    } catch (error) {
        errorApiFunction({error: error})
    }
}