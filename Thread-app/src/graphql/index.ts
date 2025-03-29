import { ApolloServer } from '@apollo/server';

async function createApolloserver(){
    const server = new ApolloServer({
        typeDefs: ` 
        type Query {}
        type Mutation {}
        `,
        resolvers: {
            Query:{},
            Mutation:{}
        },
    });
      // Start Apollo Server
    await server.start()

    return server;
}

export default createApolloserver;