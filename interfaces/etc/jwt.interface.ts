import { RoleEnum } from "../enum/role.enum";

export interface IJwt {
  id: string;
  username: string;
  password: string;
  role: RoleEnum;
  iat: number;
  exp: number;
}
