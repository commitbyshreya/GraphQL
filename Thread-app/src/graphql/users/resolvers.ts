import UserService, { CreateUserPayload } from "../../services/userService"

const queries ={}

const mutations = {
    createUser: async(_ :any, payload:CreateUserPayload)=>{
        const result = await UserService.createUser(payload)
        return result.id
    }
}

export const resolvers = {queries,mutations}