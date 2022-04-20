import http from 'http';

import { getHandlerByPathname, bodyParser } from './helpers';

import { TServer } from '@server/global';

export default ({ port, hostname, routing }: TServer) => {
  http
    .createServer(async (req, res) => {
      if (!req?.url) return;

      let body: any;

      const { pathname, searchParams } = new URL(`http://${hostname}:${port}${req?.url}`);
      const handler = getHandlerByPathname(pathname, routing);
      if (!handler) return; // TODO: unnecessary check. There is check inside getHandlerByPathname

      if (req.method !== 'GET') {
        body = await bodyParser(req);
      }

      const response = await handler({ body: JSON.parse(body), searchParams });
      const parsedResponse = JSON.stringify(response);

      res.statusCode = response?.code;
      res.setHeader('Content-Type', 'text/plain');
      res.end(parsedResponse);
    })
    .listen(port, hostname, () => {
      console.log(`Server runnisssssng at http://${hostname}:${port}/`);
    });
};
