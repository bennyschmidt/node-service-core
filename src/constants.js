const dotenv = require('dotenv');

dotenv.config();

const { HOST, PORT } = process.env;

const NODE_ENV = 'development';

module.exports = {
  NODE_ENV,
  HOST,
  PORT,
  URL: HOST
};
