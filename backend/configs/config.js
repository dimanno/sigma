
module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'dev',

    PORT: process.env.PORT || 5005,
    MONGO_CONNECT: process.env.MONGO_CONNECT,
    // MONGO_CONNECT: `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,

    ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN || 'http://localhost:3000',

    DEFAULT_USER_PASSWORD: process.env.DEFAULT_USER_PASSWORD,

    JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET || 'xxx',
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || 'yyy',
}
