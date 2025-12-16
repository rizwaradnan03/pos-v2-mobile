import { errorApiFunction } from "@/lib/error"
import { ApiManager } from "./api-manager"
import { CreateProductSchemaType, UpdateProductSchemaType, SearchProductType } from "@/interfaces/dto/product.dto"

const baseUrl = "/product"
export const FetchFindManyProduct = async () => {
    try {
        const fetch = await ApiManager(`${baseUrl}`)

        return fetch.data
    } catch (error) {
        errorApiFunction({error: error})
    }
}

export const FetchFindManyProductPaginate = async ({page}: {page: number}) => {
    try {
        const fetch = await ApiManager(`${baseUrl}/find-many-paginate/${page}`)

        return fetch.data
    } catch (error) {
        errorApiFunction({error: error})
    }
}

export const FetchFindManyCalculateProduct = async ({data}: {data: SearchProductType}) => {
    try {
        const fetch = await ApiManager(`${baseUrl}/find-many-calculate`, {
            method: "POST",
            data: data
        })

        return fetch.data
    } catch (error) {
        errorApiFunction({error: error})
    }
}

export const FetchFindOneProductById = async ({id}: {id: string}) => {
    try {
        const fetch = await ApiManager(`${baseUrl}/${id}`)

        return fetch.data
    } catch (error) {
        errorApiFunction({error: error})
    }
}

export const FetchFindManyProductByCategoryId = async ({categoryId}: {categoryId: string}) => {
    try {
        const fetch = await ApiManager(`${baseUrl}/find-many-by-category-id/${categoryId}`)

        return fetch.data
    } catch (error) {
        errorApiFunction({error: error})
    }
}

export const CreateProduct = async ({data}: {data: CreateProductSchemaType}) => {
    try {
        const create = await ApiManager(`${baseUrl}/`, {
            method: "POST",
            data: data
        })

        return create.data
    } catch (error) {
        errorApiFunction({error: error})
    }
}

export const UpdateProduct = async ({id, data}: {id: string, data: UpdateProductSchemaType}) => {
    try {
        const update = await ApiManager(`${baseUrl}/${id}`, {
            method: "PATCH",
            data: data
        })

        return update.data
    } catch (error) {
        errorApiFunction({error: error})
    }
}

export const DeleteProductById = async ({id}: {id: string}) => {
    try {
        const del = await ApiManager(`${baseUrl}/${id}`, {
            method: "DELETE"
        })

        return del.data
    } catch (error) {
        errorApiFunction({error: error})
    }
}