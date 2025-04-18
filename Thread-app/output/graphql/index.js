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
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const users_1 = require("./users");
function createApolloserver() {
    return __awaiter(this, void 0, void 0, function* () {
        const server = new server_1.ApolloServer({
            typeDefs: ` 
        type Query {
         ${users_1.User.queries}
        }
        type Mutation {
        ${users_1.User.mutations}
        `,
            resolvers: {
                Query: Object.assign({}, users_1.User.resolvers.queries),
                Mutation: Object.assign({}, users_1.User.resolvers.mutations)
            },
        });
        // Start Apollo Server
        yield server.start();
        return server;
    });
}
exports.default = createApolloserver;
