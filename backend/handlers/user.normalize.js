module.exports = {
    userNormalize: (userNorm = {}) => {
        const fieldToRemove = ['password'];

        fieldToRemove.forEach((field) => {
            delete userNorm[field];
        })
        return userNorm;
    }
};
