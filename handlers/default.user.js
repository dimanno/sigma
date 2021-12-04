 const {User} = require('../database');
 const {DEFAULT_USER_PASSWORD} = require('../configs/config');

module.exports = async () => {
    const user = await User.findOne({name: 'r'});

    if (!user) {
        await  User.createUserWithHashPassword({
            name: 'testUser',
            email: 'userTestK@gmail.com',
            password: DEFAULT_USER_PASSWORD,
        })
    }
}
