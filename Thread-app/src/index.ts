import express, { Express } from 'express'
import http from 'http'
import cors from 'cors'
import dotenv from 'dotenv'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import {prismaClient} from './lib/db'

dotenv.config()

async function startServer() {
  const app: Express = express()
  const PORT = process.env.PORT || 3000

  // Apollo Server
  const server = new ApolloServer({
    typeDefs: `
    type Query {
      hello: String
    }
    type Mutation {
      createUser(firstName: String!,lastName:String, email: String!, password:String!): Boolean
    }  
    `,
    resolvers: {
      Query: {
        hello: () => `Hello World`
      },
      Mutation: {
        createUser: async (_, { firstName, lastName, email, password }:{
          firstName: string
          lastName: string
          email: string
          password: string
        }) => {
          await prismaClient.user.create({
            data: {
              firstName,
              lastName,
              email,
              password,
              salt: 'salt',
            }
          });
          return true
        }
      }
    },
  })

  // Create HTTP server
  const httpServer = http.createServer(app)

  // Start Apollo Server
  await server.start()

  // Middleware
  app.use(cors())
  app.use(express.json())

  // Basic route
  app.get('/', (req, res) => {
    res.send('Express + Apollo Server is Running')
  })

  // GraphQL endpoint
  app.use(
    '/graphql',
    expressMiddleware(server, {
      context: async () => {
        return {};
      },
    })
  );
  

  // Start server
  await new Promise<void>((resolve) => 
    httpServer.listen({ port: PORT }, () => {
      console.log(`🚀 Server running on port ${PORT}`)
      resolve()
    })
  )
}

startServer().catch((err) => {
  console.error('Failed to start server', err)
})