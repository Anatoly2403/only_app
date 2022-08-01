import { Service } from "../../shared/classes";
import { CanAuthenticated } from "../../shared/interfaces";

export class AuthGuard implements CanAuthenticated {
  constructor(private service: Service) {}

  get isAuthenticated(): boolean {
    const token = this.service.token;
    if (!token) {
      this.service.logout();
    }
    return token;
  }
}
