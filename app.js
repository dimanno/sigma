const express = require('express');
const mongoose = require("mongoose");

require('dotenv').config();

const {PORT, MONGO_CONNECT, NODE_ENV, ALLOWED_ORIGIN} = require('./configs/config');
const {usersRouter, authRouter} = require('./routes');
const ErrorHandler = require('./errors/errors.handler');
const insertDefaultData = require('./handlers/default.user')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect(MONGO_CONNECT).then(()=>{
    console.log('mongo connect successfully');
});

app.use('/auth', authRouter);
app.use('/users', usersRouter);

// eslint-disable-next-line no-unused-vars
app.use('*', (err, req, res, next) => {
    res
        .status(err.status || 500)
        .json({
            message: err.message
        });
});

app.listen(PORT, () => {
    console.log(`app listen ${PORT}`);

    insertDefaultData();
});

function _configCors(origin, callback) {

    if (NODE_ENV === 'dev') {
        return callback(null, true);
    }

    const whiteList = ALLOWED_ORIGIN.split(';');

    if (!whiteList.includes(origin)) {
        return callback(new ErrorHandler('CORS is not allowed'), false);
    }

    return callback(null, true);
}
