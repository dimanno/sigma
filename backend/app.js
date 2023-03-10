const express = require('express');
const mongoose = require("mongoose");
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const helmet = require('helmet');
const pathToSwaggerUi = require('swagger-ui-dist').absolutePath()

require('dotenv').config();

const {PORT, MONGO_CONNECT, NODE_ENV, ALLOWED_ORIGIN} = require('./configs/config');
const {usersRouter, authRouter, postRouter} = require('./routes');
const ErrorHandler = require('./errors/errors.handler');
const insertDefaultUser = require('./handlers/default.user');

const app = express();

app.use(express.static(pathToSwaggerUi))
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors({origin: _configCors}));
app.use(helmet());
app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
}));

if (NODE_ENV === 'dev') {
    const morgan = require('morgan');
    app.use(morgan('dev'));
}

mongoose.connect(MONGO_CONNECT).then(()=>{
    console.log('mongo connect successfully');
});

app.use('/auth', authRouter);
app.use('/posts', postRouter);
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

    insertDefaultUser().then();
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
