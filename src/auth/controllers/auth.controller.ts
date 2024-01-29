import { Controller, Get } from "routing-controllers";

@Controller("/auth")
export class AuthController {
  @Get("/")
  getAuth() {
    return "Hola Mundo";
  }
}
