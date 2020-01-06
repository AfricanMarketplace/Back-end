// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
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
