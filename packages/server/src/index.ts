import server from '@server/http';
import { TServerRouting } from '@server/global';
import { userService, userHandlers } from '@notepad/user-servise';

const hostname = '127.0.0.1';
const port = 3000;
const a = userService(userHandlers);

const routing: TServerRouting = {
  user: userService(userHandlers),
};

server({ port, hostname, routing });
