import { IError } from "@/interfaces/error.interface";

export const errorApiFunction = ({ error }: IError) => {
  if (error.response) {
    throw error.response.data.message;
  } else if (error.request) {
    throw new Error("Tidak ada respons dari server");
  } else {
    throw new Error("Terjadi kesalahan, coba lagi nanti");
  }
};
