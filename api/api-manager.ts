import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { jwtClear, jwtGetAccessToken, jwtSetAccessToken } from "@/utils/jwt";
import { AuthRefreshAccessToken } from "./auth";

export const ApiManager = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

ApiManager.interceptors.request.use(
  (config) => {
    const token = jwtGetAccessToken();

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

ApiManager.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    if (!error.response) {
      console.error("Network Error: Periksa koneksi internet Anda", error);
      return Promise.reject(
        new Error("Network Error: Periksa koneksi internet Anda")
      );
    }

    const status = error.response.status;

    if (status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshAccessToken = await AuthRefreshAccessToken();
        originalRequest.headers[
          "Authorization"
        ] = `Bearer ${refreshAccessToken.data}`;

        jwtSetAccessToken({ token: refreshAccessToken.data });

        return ApiManager(originalRequest);
      } catch (axiosError) {
        console.error("Gagal refresh token : ");
        jwtClear();
        window.location.href = "/";

        return Promise.reject(axiosError);
      }
    }

    return Promise.reject(error);
  }
);

export const ApiManagerBlob = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  responseType: "blob",
  headers: {
    "Content-Type": "application/json",
  },
});

ApiManagerBlob.interceptors.request.use(
  (config) => {
    const token = jwtGetAccessToken();

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

ApiManagerBlob.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    if (!error.response) {
      console.error("Network Error: Periksa koneksi internet Anda", error);
      return Promise.reject(
        new Error("Network Error: Periksa koneksi internet Anda")
      );
    }

    const status = error.response.status;

    if (status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshAccessToken = await AuthRefreshAccessToken();
        originalRequest.headers[
          "Authorization"
        ] = `Bearer ${refreshAccessToken.data}`;

        jwtSetAccessToken({ token: refreshAccessToken.data });

        return ApiManager(originalRequest);
      } catch (axiosError) {
        console.error("Gagal refresh token : ");
        jwtClear();
        window.location.href = "/";

        return Promise.reject(axiosError);
      }
    }

    return Promise.reject(error);
  }
);

export const ApiManagerWithoutToken = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});
