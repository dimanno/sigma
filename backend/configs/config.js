// const DB_USER = process.env.MONGO_INITDB_ROOT_USERNAME;
// const DB_PASSWORD = process.env.MONGO_INITDB_ROOT_PASSWORD;
// const DB_HOST = process.env.DB_HOST;
// const DB_PORT = process.env.DB_PORT;
// const DB_NAME = process.env.MONGO_INITDB_DATABASE;

module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'dev',

    PORT: process.env.PORT || 5005,
    HOST: process.env.HOST,
    MONGO_CONNECT: process.env.MONGO_CONNECT || 'mongodb://localhost:27017/sigma-test',
    // MONGO_CONNECT: `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,

    ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN || 'http://localhost:3000',

    DEFAULT_USER_PASSWORD: '12345aZ$',

    JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET || 'xxx',
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || 'yyy',
}
