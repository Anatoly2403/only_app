import { IUser, IUserData } from "../interfaces";
export abstract class Service {
  get token(): string | null {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    return token;
  }

  abstract getUserByData(data: IUserData): Promise<IUser>;

  abstract getUserByToken(token: string): Promise<IUser>;

  abstract removeToken(): void;
}
