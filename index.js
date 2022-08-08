const express = require('express');
const app = express();
const router = require('./routes/index.js');

const { host, port } = require('./config/config');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Hola mundo</h1>');
});

app.use('/api/v1/', router);

app.all('*', (req, res) => {
  res.status(404).send('<h1>404! Page not found</h1>');
});

app.listen(port, host, () => {
  console.log(`Server: http://${host}:${port}`);
});
