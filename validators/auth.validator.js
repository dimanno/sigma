const joi = require('joi');

const {regExp: {PASSWORD_REGEXP, EMAIL_REGEXP}} = require('../constants');

const authValidator = joi.object({
    email: joi
        .string()
        .regex(EMAIL_REGEXP)
        .lowercase()
        .required(),
    password: joi
        .string()
        .regex(PASSWORD_REGEXP)
        .required()
});

const emailValidator = joi.object({
    email: joi
        .string()
        .regex(EMAIL_REGEXP)
        .lowercase()
        .required(),
});

const passwordValidator = joi.object({
    password: joi
        .string()
        .regex(PASSWORD_REGEXP)
        .min(8)
        .max(128)
        .trim()
        .required()
});

module.exports = {
    authValidator,
    emailValidator,
    passwordValidator,
};
