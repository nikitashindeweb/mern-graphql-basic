const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        name: String!
        age: Int!
        active: Boolean
        subject: Subject
    }

    enum Subject {
        Maths
        Science
    }

    # Queries 
    type Query{
        sayHi: String! 
        getAllUsers: [User!]!
    }

    # Mutations
    type Mutation{
        createUser(name: String!, age: Int!, active: Boolean, subject: Subject): User!
    }
`;

module.exports = {typeDefs};