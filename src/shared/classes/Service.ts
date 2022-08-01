import { IUser, IUserData } from "../interfaces";

export abstract class Service {
  get token(): boolean {
    return !!localStorage.getItem("token");
  }

  abstract login(data: IUserData): Promise<IUser>;

  abstract logout(): void;
}
