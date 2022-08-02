export interface IUserData {
  password: string;
  login: string;
  rememberable?: boolean;
}

export interface IUser extends IUserData {
  token?: string;
}

export interface CanAuthenticated {
  get isAuthenticated(): boolean;
}

export interface HasToken {
  checkToken(): Promise<boolean>;
}
