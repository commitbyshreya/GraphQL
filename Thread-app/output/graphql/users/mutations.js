"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mutations = void 0;
exports.mutations = `

    createUser(
        username: String!
        password: String!
        email: String!
        firstName: String!
        lastName: String!
    ): String
    
    updateUser(
        id: ID!
        username: String
        password: String
        email: String
        firstName: String
        lastName: String
    ): User
    
    deleteUser(id: ID!): Boolean
`;
