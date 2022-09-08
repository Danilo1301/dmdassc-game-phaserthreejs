import express from 'express';
import http from 'http';
import socketio from 'socket.io';
import path from 'path';

const isDevelopment = (process.env.NODE_ENV || "development").trim() === 'development';
const port = process.env.PORT || 3000;
const io: socketio.Server = new socketio.Server()
const app: express.Application = express();
const server: http.Server = http.createServer(app);

function main()
{
  console.log("server.ts | (ignoring)isDevelopment=", isDevelopment);
  //runCPUTest();
  setupExpress();
  //const game = new Game();
  //game.start();
}

function setupExpress()
{
  //path: '/socket',
  io.attach(server, {cors: { origin: '*' }});
  //app.use(express.static(path.join(__dirname, "..", "..", "dist")));
  app.use(express.static(path.join(__dirname, "..", "..", "public")));
  server.listen(port, () => console.log(`Express web server started: http://localhost:${port}`));
}

function runCPUTest()
{
  var os = require('os-utils');
  setInterval(() => {
    os.cpuUsage(function(v){
        console.log( 'CPU Usage (%): ' + v );
    });
  }, 1000)
}

main();



