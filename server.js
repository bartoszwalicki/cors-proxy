var httpProxy = require("http-proxy");
var cors = require("cors");
var targetURL = process.env.REMOTE_ENDPOINT;
var port = process.env.LOCAL_PORT;

var proxy = httpProxy.createProxyServer({ target: targetURL }).listen(port);

proxy.on("proxyRes", (proxyRes, req, res) => {
  cors()(req, res, () => { });
});

console.log(
  `Proxy  (╯ ͠° ͟ʖ ͡°)╯┻━┻ \n\rTarget: ${targetURL}\n\rSource: localhost:${port}`
);
