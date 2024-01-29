import fastify from "fastify";
import { IServer } from "../interfaces/server";
import { Module } from "../interfaces/module";

export class FastifyServer implements IServer {
  private server:any ;

  constructor() {
    this.server = fastify();
    this.setMiddleware();
    this.setRoutes();
  }
  setModules(module: Module): void {
    throw new Error("Method not implemented.");
  }

  setRoutes(): void {
    this.server.get("/", async (request: any, reply: any) => {
      return { message: "Hello, world!" };
    });
  }

  setMiddleware(): void {
    // Puedes configurar middleware aquí si es necesario
  }

  listen(port: number): void {
    this.server.listen(port, (err: any, address: any) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log(`Server listening on ${address}`);
    });
  }
}
