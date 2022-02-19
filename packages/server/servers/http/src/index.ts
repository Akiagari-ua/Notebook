import http from 'http';

export default (port: number, hostname: string) => {
  http
    .createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hellasdadso World');
    })
    .listen(port, hostname, () => {
      console.log(`Server runnisssssng at http://${hostname}:${port}/`);
    });
};
