import server from '@server/http';
import { TServerRouting, CODES } from '../servers/types'; //TMP

const hostname = '127.0.0.1';
const port = 3000;

const routing: TServerRouting = {
  user: {
    createUser: async (args) => ({
      code: CODES.OK,
      data: { ...args, params: args.searchParams?.getAll('id') },
    }),
    getUser: async (args) => ({
      code: CODES.BAD_REQUEST,
    }),
  },
};

server({ port, hostname, routing });
