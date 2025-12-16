import { SignInSchemaType } from "@/interfaces/dto/auth.dto";
import { ApiManager, ApiManagerWithoutToken } from "./api-manager";
import { errorApiFunction } from "@/lib/error";
import { jwtGetRefreshToken } from "@/lib/jwt";

export const AuthSignIn = async ({data}: {data: SignInSchemaType}) => {
  try {
    const signIn = await ApiManagerWithoutToken("/auth/sign-in", {
      method: "POST",
      data: data,
    });

    return signIn.data;
  } catch (error: any) {
    errorApiFunction({ error: error });
  }
};

export const AuthVerifyPassword = async ({data}: {data: {password: string}}) => {
  try {
    const verify = await ApiManager(`/auth/verify-password`, {
      method: "POST",
      data: data
    })

    return verify.data
  } catch (error) {
    errorApiFunction({error: error})
  }
}

export const AuthRefreshAccessToken = async () => {
  try {
    const refreshToken = jwtGetRefreshToken();

    const retrieve = await ApiManagerWithoutToken(
      `/auth/refresh-access-token`,
      {
        method: "POST",
        data: {
          refresh_token: refreshToken,
        },
      }
    );

    return retrieve.data;
  } catch (error) {
    errorApiFunction({ error: error });
  }
};
