import { Service } from '../../shared/classes';
import { IUser, IUserData } from "../../shared/interfaces";

export class UserService extends Service {
  constructor(private api: (data: IUserData) => Promise<IUser>) {
    super();
  }

  public async login(data: IUserData): Promise<IUser> {
    const user = await this.api(data);
    if (user.token) {
      localStorage.setItem("token", user.token);
    }
    return user;
  }

  public logout(): void {
    localStorage.removeItem("token");
  }
}
