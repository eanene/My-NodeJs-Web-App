
// I created this using this resource https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Welcome to Ebuka NodeJS application version 2');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);