"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const db_1 = require("./lib/db");
dotenv_1.default.config();
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        const PORT = process.env.PORT || 3000;
        // Apollo Server
        const server = new server_1.ApolloServer({
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
                    createUser: (_1, _a) => __awaiter(this, [_1, _a], void 0, function* (_, { firstName, lastName, email, password }) {
                        yield db_1.prismaClient.user.create({
                            data: {
                                firstName,
                                lastName,
                                email,
                                password,
                                salt: 'salt',
                            }
                        });
                        return true;
                    })
                }
            },
        });
        // Create HTTP server
        const httpServer = http_1.default.createServer(app);
        // Start Apollo Server
        yield server.start();
        // Middleware
        app.use((0, cors_1.default)());
        app.use(express_1.default.json());
        // Basic route
        app.get('/', (req, res) => {
            res.send('Express + Apollo Server is Running');
        });
        // GraphQL endpoint
        app.use('/graphql', (0, express4_1.expressMiddleware)(server, {
            context: (_a) => __awaiter(this, [_a], void 0, function* ({ req }) {
                return ({
                    token: req.headers.token,
                });
            }),
        }) // Use `as any` to suppress type errors if necessary
        );
        // Start server
        yield new Promise((resolve) => httpServer.listen({ port: PORT }, () => {
            console.log(`🚀 Server running on port ${PORT}`);
            resolve();
        }));
    });
}
startServer().catch((err) => {
    console.error('Failed to start server', err);
});
