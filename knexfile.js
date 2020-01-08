// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      host:'localhost',
      database: 'africa',
      user: 'africa',
      password: process.env['PASSWORD']
    },
    migrations:{
      directory: "./data/migrations"
    },
    seeds:{
      directory:"./data/seeds"
    }

  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations:{
      directory: "./data/migrations"
    },
    seeds:{
      directory:"./data/seeds"
    }
  }
};
