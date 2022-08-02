import { IUser } from "../interfaces";

export type ErrorMessage = string | undefined;

export type IStorageData = Required<Pick<IUser, "token" | "rememberable">>;
