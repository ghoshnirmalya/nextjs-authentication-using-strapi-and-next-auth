module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '2f6ad6ef50811c2f5f3ae5e1b81c8a3f'),
    },
  },
});
