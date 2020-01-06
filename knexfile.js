// Update with your config settings.

module.exports = {

  development: {
    client: config.DB_DIALECT,
    useNullAsDefault: true,
    connection: process.env.DATABASE_URL,
    migrations:{
      directory: "./data/migrations"
    },
    seeds:{
      directory:"./data/seeds"
    }
  }
};
