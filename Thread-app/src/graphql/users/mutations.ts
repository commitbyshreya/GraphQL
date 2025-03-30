export const mutations = `

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
`