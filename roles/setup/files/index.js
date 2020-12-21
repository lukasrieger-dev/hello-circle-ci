var http = require("http");
var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end("Hello World! By Cloud DevOps Master L.R.");
});
server.listen(3000);