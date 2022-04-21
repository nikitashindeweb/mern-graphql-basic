const { Users } = require('../Data');

const resolvers = {
    Query: {
        sayHi: () => "Hello World!",

        getAllUsers: () => {
            console.log("Users", Users)
            return Users;
        }
    },

    Mutation: {
        createUser(parent, args) {
            const newUser = args;
            Users.push(newUser);
            return newUser;
        }
    }
}

module.exports = {resolvers}