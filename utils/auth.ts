import * as SecureStore from 'expo-secure-store'
import { jwtDecode } from 'jwt-decode'

export const saveToken = async (token: string) =>{
    await SecureStore.setItemAsync("access_token", token)
}

export const getToken = async () => {
    return SecureStore.getItemAsync("access_token")
}

export const deleteToken = async () => {
    await SecureStore.deleteItemAsync("access_token")
}

export const getId = async () => {
    const token: any = await getToken()
    const decodedToken: any = jwtDecode(token)

    return decodedToken.id
}