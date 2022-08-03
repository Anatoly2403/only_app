import { Service } from "../../shared/classes";
import { IUser, IUserData } from "../../shared/interfaces";
import { sleep } from "../utils";

export class UserService extends Service {
  private userList: IUser[] = [
    {
      login: "steve.jobs@example.com",
      password: "password",
      token: "8ba57374-a436-45a2-ac11-01a4925ce59a",
    },
  ];

  public async getUserByData(data: IUserData): Promise<IUser> {
    await sleep(1000);

    const user = this.userList.find(
      (user) => user.login === data.login && user.password === data.password
    );

    if (!user) throw new Error(`Пользователя ${data.login} не существует`);

    if (user.token) {
      sessionStorage.setItem("token", user.token);
      if (data.rememberable) {
        localStorage.setItem("token", user.token);
      }
    }
    return {
      ...user,
      rememberable: data.rememberable,
    };
  }

  public async getUserByToken(token: string): Promise<IUser> {
    await sleep(1000);

    const user = this.userList.find((user) => user.token === token);

    if (!user) throw new Error(`Пользователя не существует`);

    return user;
  }

  public removeToken(): void {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
  }
}
