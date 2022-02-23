const development = {
  database: process.env.PG_DATABASE,
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  dialect: 'postgres',
};

const testing = {
  database: 'databasename',
  username: 'username',
  password: 'password',
  host: 'localhost',
  port: process.env.PG_PORT,
  dialect: 'sqlite' || 'mysql' || 'postgres',
};

const production = {
  database: process.env.PG_DATABASE,
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
  host: process.env.PG_HOST || 'localhost',
  dialect: process.env.PG_DIALECT || 'postgres',
};

module.exports = {
  development,
  testing,
  production,
};
