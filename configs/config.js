module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'dev',

    PORT: 5005,
    MONGO_CONNECT: 'mongodb://localhost:27017/sigma-test',

    JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET || 'xxx',
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || 'yyy',

    ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN || 'http://localhost:3000',
}
