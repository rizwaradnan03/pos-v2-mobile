import { errorApiFunction } from "@/lib/error"
import { ApiManagerBlob } from "./api-manager"

export const FetchFileFromWebUrl = async ({fileUrl}: {fileUrl: string}) => {
    try {
        const fetch = await ApiManagerBlob(`${fileUrl}`)

        return fetch.data
    } catch (error) {
        errorApiFunction({error: error})
    }
}