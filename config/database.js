const { MONGO_URI } = process.env || {}
module.exports = ({ env }) => {
  return {
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'mongoose',
        settings: {
          uri: env('MONGO_URI', MONGO_URI || 'mongodb://localhost:27017/strapi-node'),
          srv: env.bool('MONGO_SRV', true)
        },
        options: {
          authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
          ssl: env.bool('DATABASE_SSL', true)
        }
      }
    }
  }
}
