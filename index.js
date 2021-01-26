const express = require('express');

const CONFIG = require('./src/config');

const HomeController = require('./src/controllers/home.js');
const AboutController = require('./src/controllers/about.js');

const server = express();

server.use(express.static('public'));
server.get('/', HomeController.GET);
server.get('/about', AboutController.GET);

server.listen(CONFIG.PORT, () => console.log(CONFIG.PORT));
