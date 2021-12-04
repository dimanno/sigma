module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'dev',

    PORT: 5005,
    MONGO_CONNECT: 'mongodb://localhost:27017/sigma-test',

    ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN || 'http://localhost:3000',

    DEFAULT_USER_PASSWORD: '12345aZ$'
}
