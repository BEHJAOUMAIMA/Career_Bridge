import {Role} from "./role";

export interface UserRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role?: Role;
}
