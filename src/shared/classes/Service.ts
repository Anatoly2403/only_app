import { IUser, IUserData } from "../interfaces";
import { IStorageData } from "../types";

function isStorageData(token: unknown): token is IStorageData {
  if (!token) return false;
  return (
    typeof token === "object" && "token" in token && "rememberable" in token
  );
}

export abstract class Service {
  get token(): IStorageData | null {
    const token = localStorage.getItem("token");
    const parsedToken = token && JSON.parse(token);
    if (isStorageData(parsedToken)) return parsedToken;

    return null;
  }

  abstract login(data: IUserData): Promise<IUser>;

  abstract logout(): void;

  abstract getUserByToken(token: string): Promise<IUser>;
}
