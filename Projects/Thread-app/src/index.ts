import express, { Express } from 'express'
import http from 'http'
import cors from 'cors'
import dotenv from 'dotenv'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'

dotenv.config()

async function startServer() {
  const app: Express = express()
  const PORT = process.env.PORT || 3000

  // Apollo Server
  const server = new ApolloServer({
    typeDefs: `
    type Query {
      hello: String
    }`,
    resolvers: {
      Query: {
        hello: () => `Hello World`
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
  // app.use('/graphql', expressMiddleware(server, {
  //   context: async ({ req }) => ({
  //     token: req.headers.token
  //   })
  // }))

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