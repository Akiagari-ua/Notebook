import http from 'http';

import { getHandlerByPathname, bodyParser } from './helpers';

import { TServer } from '@server/global';

const searchParser = (search: string) => {
  if (typeof search !== 'string' || !search) return '';

  const params = search
    .split('?')[1]
    .split('&')
    .reduce((acc, current) => {
      const [key, value] = current.split('=');
      return { ...acc, [key]: value };
    }, {});

  return params;
};

export default ({ port, hostname, routing }: TServer) => {
  http
    .createServer(async (req, res) => {
      if (!req?.url) return;

      let body: any;
      const { pathname, search = '' } = new URL(`http://${hostname}:${port}${req?.url}`);
      const searchParams = searchParser(search) || void 0;

      const handler = getHandlerByPathname(pathname, routing);
      if (!handler) return; // TODO: unnecessary check. There is check inside getHandlerByPathname

      if (req.method !== 'GET') {
        body = await bodyParser(req);
      }
      //@ts-ignore
      const response = await handler({ body: body ? JSON.parse(body) : void 0, searchParams });
      const parsedResponse = JSON.stringify(response);

      res.statusCode = response?.code;
      res.setHeader('Content-Type', 'text/plain');
      res.end(parsedResponse);
    })
    .listen(port, hostname, () => {
      console.log(`Server runnisssssng at http://${hostname}:${port}/`);
    });
};
