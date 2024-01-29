import { IServer } from "../interfaces/server";
import { ExpressServer } from "./express-server";
import { FastifyServer } from "./fastify-server";
import { ExpressServerRouting } from "./router-express-server";

export enum ServerType {
  EXPRESS = "express",
  FASTIFY = "fastify",
  EXPRESS_ROUTER = "express-routing",
  // Agrega otros tipos de servidores aquí si es necesario en el futuro
}

export function createServer(type: ServerType): IServer {
  switch (type) {
    case ServerType.EXPRESS:
      return new ExpressServer();
    // Agrega otros casos aquí si es necesario en el futuro
    case ServerType.FASTIFY:
      return new FastifyServer();
    case ServerType.EXPRESS_ROUTER:
      return new ExpressServerRouting();
    default:
      throw new Error(`Tipo de servidor no válido: ${type}`);
  }
}
