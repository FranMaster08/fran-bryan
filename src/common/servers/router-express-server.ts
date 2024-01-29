import express, { Application } from "express";
import { IServer } from "../interfaces/server";
import { createExpressServer } from 'routing-controllers';
import { Module } from "../interfaces/module";

export class ExpressServerRouting implements IServer {
  private server: Application;
  constructor() {
    this.server = express();
    this.setMiddleware();
    this.setRoutes();
  }
  setModules(module: Module): void {
    this.server = createExpressServer({
      controllers: [module.getControllers()[0]], // we specify controllers we want to use
    });
    this.server.get('/' , (req, res) => { res.send("<h1>Bienvenido</h1>")})
    this.server.use('/' , module.getControllers())
  }

  setRoutes(): void {
    this.server.get("/", (req, res) => {
      res.json("hola mundo");
    });
  }
  setMiddleware(): void {
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: false }));
  }
  listen(port: number): void {
    this.server.listen(port);
    console.log(`Liste on port ${port}`);
  }
}
