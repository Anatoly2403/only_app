import { IUser, IUserData } from "../interfaces";

export abstract class Service {
  get token(): string | null {
    return localStorage.getItem("token");
  }

  abstract login(data: IUserData): Promise<IUser>;

  abstract logout(): void;

  abstract getUserByToken(token: string): Promise<IUser>;
}
