 const {User} = require('../database');
 const {DEFAULT_USER_PASSWORD} = require('../configs/config');

module.exports = async () => {
    const user = await User.find().lean();
    if (!user.length) {
        await  User.createUserWithHashPassword({
            name: 'Admin',
            email: 'admin@gmail.com',
            age: 21,
            password: DEFAULT_USER_PASSWORD,
        })
    }
}
