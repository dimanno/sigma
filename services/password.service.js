const bcrypt = require('bcrypt');

const {messageResponse, statusCodeResponse} = require('../constants');
const ErrorHandler = require('../errors/errors.handler')

module.exports = {
    hash: (password) => bcrypt.hash(password, 10),

    compare: async  (password, hashPassword) => {
        const isPasswordMatched = bcrypt.compare(password, hashPassword);

        if (!isPasswordMatched) {
            throw new ErrorHandler(messageResponse.WRONG_LOGIN_DATA, statusCodeResponse.NOT_FOUND)
        }
    }
}

