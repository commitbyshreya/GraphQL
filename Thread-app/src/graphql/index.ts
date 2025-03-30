import { ApolloServer } from '@apollo/server';
import { User } from './users';

async function createApolloserver(){
    const server = new ApolloServer({
        typeDefs: ` 
        type Query {
         ${User.queries}
        }
        type Mutation {
        ${User.mutations}
        `,
        resolvers: {
            Query:{
                ...User.resolvers.queries
            },
            Mutation:{
                ...User.resolvers.mutations 
            }
        },
    });
      // Start Apollo Server
    await server.start()

    return server;
}

export default createApolloserver;