import { IUser, IUserData } from "../../shared/interfaces";
import { generateToken, sleep } from "./utils";

export async function fetchUser(data: IUserData): Promise<IUser> {
  await sleep(1000);

  if (data.login !== "steve.jobs@example.com" || data.password !== "password") {
    throw new Error(`Пользователя ${data.login} не существует`);
  }

  return {
    ...data,
    token: generateToken(),
  };
}
