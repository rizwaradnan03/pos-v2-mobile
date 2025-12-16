import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

export const storageSaveItem = async ({
  key,
  data,
}: {
  key: string;
  data: string;
}) => {
  if (Platform.OS === "web") {
    localStorage.setItem(key, data);
  } else {
    await SecureStore.setItemAsync(key, data);
  }
};

export const storageGetItem = async ({ key }: { key: string }) => {
  if (Platform.OS === "web") {
    return localStorage.getItem(key);
  } else {
    return await SecureStore.getItemAsync(key);
  }
};

export const storageDeleteItem = async ({ key }: { key: string }) => {
  if (Platform.OS === "web") {
    localStorage.removeItem(key);
  } else {
    await SecureStore.deleteItemAsync(key);
  }
};

export const storageGetAccessToken = async () => {
  return await storageGetItem({ key: "access_token" });
};

export const storageSetAccessToken = async ({ token }: { token: string }) => {
  await storageSaveItem({ key: "access_token", data: token });
};

export const storageDeleteAccessToken = async () => {
  await storageDeleteItem({ key: "access_token" });
};
