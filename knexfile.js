// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: "postgres://localhost/game-types"
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
