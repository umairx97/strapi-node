const { MONGO_URI } = process.env || {}
module.exports = ({ env }) => {
  return {
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'mongoose',
        settings: {
          uri: env('DATABASE_URI', MONGO_URI || 'mongodb://localhost:27017/strapi-node'),
          srv: env.bool('DATABASE_SRV', true)
        }
      }
    }
  }
}
