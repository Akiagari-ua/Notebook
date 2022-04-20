import server from '@server/http';
import { TServerRouting } from '@server/global';
import { userServise } from '@notepad/user-servise/userServise';

const hostname = '127.0.0.1';
const port = 3000;

const routing: TServerRouting = {
  user: userServise,
};

server({ port, hostname, routing });
