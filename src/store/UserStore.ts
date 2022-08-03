import { createContext, useContext } from "react";
import { AuthGuard, UserService } from "../api/services";
import { Service } from "../shared/classes";
import { Guards } from "../shared/enums";
import { CanAuthenticated, IUser, IUserData } from "../shared/interfaces";
import { makeAutoObservable } from "mobx";

export class UserStore {
  public readonly guards: Record<Guards, CanAuthenticated> = {
    [Guards.Auth]: new AuthGuard(this.service),
  };
  private _user: IUser | null = null;
  private _isLoading: boolean = false;
  private _errorMessage: string | null = null;

  constructor(public service: Service) {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  get isLoading(): boolean {
    return this._isLoading;
  }

  get user(): IUser | null {
    return this._user;
  }

  get errorMessage(): string | null {
    return this._errorMessage;
  }

  public async login(data: IUserData): Promise<void> {
    try {
      this._isLoading = true;
      this._user = await this.service.getUserByData(data);
      this._isLoading = false;
    } catch (error) {
      if (error instanceof Error) {
        this._errorMessage = error.message;
      }
      this._isLoading = false;
    }
  }

  public logout(): void {
    this._user = null;
    this.service.removeToken();
  }

  public async getUserByToken(token: string): Promise<void> {
    try {
      this._isLoading = true;
      this._user = await this.service.getUserByToken(token);
      this._isLoading = false;
    } catch (error) {
      if (error instanceof Error) {
        this._errorMessage = error.message;
      }
      this._isLoading = false;
    }
  }
}

const userService = new UserService();
export const userStore = new UserStore(userService);

export const UserStoreContext = createContext<UserStore | null>(null);

export const useStore = () => {
  const userStore = useContext(UserStoreContext);
  if (!userStore) throw new Error("Store not found");
  return userStore;
};
