import { storageDeleteAccessToken, storageGetAccessToken, storageSetAccessToken } from "./storage";
import { IJwt } from "@/interfaces/etc/jwt.interface";
import {jwtDecode} from "jwt-decode"

export const jwtGetDecodedToken = async (): Promise<IJwt | undefined> => {
  try {
    const accessToken = await storageGetAccessToken();
    if(!accessToken){
        return
    }

    return jwtDecode(accessToken) as IJwt;
  } catch (error) {
    console.log(error);
  }
};

export const jwtGetAccessToken = async () => {
  try {
    return await storageGetAccessToken()
  } catch (error) {
    console.log(error)
  }
}

export const jwtSetAccessToken = async ({token}: {token: string}) => {
  try {
    await storageSetAccessToken({token: token})
    return
  } catch (error) {
    console.log(error)
  }
}

export const jwtClear = async () => {
  try {
    await storageDeleteAccessToken()
    return
  } catch (error) {
    console.log(error)
  }
}