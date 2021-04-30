module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', process.env.PORT || 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '407a2ad3b6e1830a885867adc4244846')
    }
  }
})
