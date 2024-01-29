import { Module } from "../common/interfaces/module";
import { AuthController } from "./controllers/auth.controller";
import { AuthService } from "./services/authService";
export class AuthMoldule implements Module {
  getControllers(): any[] {
    return [AuthController];
  }
  getServices(): any[] {
    return [AuthService];
  }
}


