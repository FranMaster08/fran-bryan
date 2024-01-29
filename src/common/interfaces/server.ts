import { Module } from "./module";

export interface IServer {
  setModules(module: Module): void;
  setRoutes(): void;
  setMiddleware(): void;
  listen(port: number): void;
}
