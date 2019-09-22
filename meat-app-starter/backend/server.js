"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsonServer = require("json-server");
var fs = require("fs");
var auth_1 = require("./auth");
var authz_1 = require("./authz");
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();
// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Se
server.use(jsonServer.bodyParser);
//middleware para login
server.post('/login', auth_1.handleAuthentication);
server.use('/orders', authz_1.handleAuthorization);
server.use(router);
var options = {
    cert: fs.readFileSync('./backend/keys/cert.pem'),
    key: fs.readFileSync('./backend/keys/key.pem')
};
server.listen(3000, function () {
    console.log('JSON Server is running on https://localhost:3000');
});
