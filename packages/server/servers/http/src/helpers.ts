import type { IncomingMessage } from 'http';
import { TServerRouting } from '@server/global';

type TNamesOfMethods = keyof TServerRouting[keyof TServerRouting];

type TMethods = TServerRouting[keyof TServerRouting][TNamesOfMethods];

export const getHandlerByPathname = (pathname: string, routing: TServerRouting): TMethods => {
  const [currentRoute, currentMethod] = pathname.substring(1).split('/');

  const route = routing[currentRoute as keyof TServerRouting];

  if (!route) throw new Error('Route Not found');

  const method = route[currentMethod as TNamesOfMethods];

  if (!method) throw new Error('Method Not found');

  return method;
};

export const bodyParser = async (req: IncomingMessage) => {
  const buffers = [];

  for await (const chunk of req) {
    buffers.push(chunk);
  }

  return Buffer.concat(buffers).toString();
};
