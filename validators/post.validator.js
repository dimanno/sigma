const joi = require('joi');

module.exports = {
    addPost_validator: joi.object({
        text: joi
            .string()
            .min(10)
            .max(9000)
            .required()
    })
};
