import express, { Application } from "express";
import { IServer } from "../interfaces/server";
import { Module } from "../interfaces/module";

export class ExpressServer implements IServer {
  private server: Application;
  constructor() {
    this.server = express();
    this.setMiddleware();
    this.setRoutes();
  }
  setModules(module: Module): void {
    throw new Error("Method not implemented.");
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
