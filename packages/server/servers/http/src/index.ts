import http, { IncomingMessage } from 'http';

import { TServer, Routing, Methods } from './types';

//TODO: parser url
//TODO: implement reading get parametrs
//TODO: add handling errors
//TODO: implement check cookies
//TODO: implement response to client

type TMethodsAndRoutes = {
  method: Methods;
  route: Routing;
};

const getRouteAndMethod = (pathname: string): TMethodsAndRoutes => {
  const [route, method] = pathname.substring(1).split('/');

  const currentRoute = route as Routing;
  const currentMethod = method as Methods;

  if (!Object.values(Routing).includes(currentRoute)) throw new Error('Route Not found');
  if (!Object.values(Methods).includes(currentMethod)) throw new Error('Method Not found');

  return {
    route: currentRoute,
    method: currentMethod,
  };
};

const bodyParser = async (req: IncomingMessage) => {
  const buffers = [];

  for await (const chunk of req) {
    buffers.push(chunk);
  }

  Buffer.concat(buffers).toString();

  return Buffer.concat(buffers).toString();
};

export default ({ port, hostname, routing }: TServer) => {
  http
    .createServer(async (req, res) => {
      if (!req?.url) return;

      let body: any;

      const { pathname, searchParams } = new URL(`http://${hostname}:${port}${req?.url}`);
      const { route, method } = getRouteAndMethod(pathname);

      const apiRoute = routing?.[route];

      if (req.method !== 'GET') {
        body = await bodyParser(req);
      }

      if (!apiRoute) return;

      const handler = apiRoute[method];

      if (!handler) return;

      const response = await handler({ body, searchParams });

      const parsedResponse = JSON.stringify(response);

      res.statusCode = response?.code;
      res.setHeader('Content-Type', 'text/plain');
      res.end(parsedResponse);
    })
    .listen(port, hostname, () => {
      console.log(`Server runnisssssng at http://${hostname}:${port}/`);
    });
};
