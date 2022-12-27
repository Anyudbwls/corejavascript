const liveServer = require('live-server');
const params = {
  host: 'localhost',
  port: 3000,
  open: false,
  rott: './client',
};

liveServer.start(params);
