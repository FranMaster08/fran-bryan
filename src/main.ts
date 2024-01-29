import { IServer } from "./common/interfaces/server";
import { createServer, ServerType } from "./common/servers/server-factory";
import { AuthMoldule } from "./auth/app";
const server: IServer = createServer(ServerType.EXPRESS_ROUTER);
server.setModules(new AuthMoldule())
server.listen(3000);
