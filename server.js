var httpProxy = require("http-proxy");
var cors = require("cors");
var targetURL = process.env.REMOTE_ENDPOINT;
var port = process.env.LOCAL_PORT;

var proxy = httpProxy.createProxyServer({ target: targetURL }).listen(port);

proxy.on("proxyRes", (proxyRes, req, res) => {
  cors()(req, res, () => { });
});

proxy.on('proxyError', (err, req, res) => {
  res.writeHead(500, { 'Content-Type': 'text/plain' });
  res.end('Proxying error.');
});

console.log(
  `Proxy  (╯ ͠° ͟ʖ ͡°)╯┻━┻ \n\rTarget: ${targetURL}\n\rSource: localhost:${port}`
);
