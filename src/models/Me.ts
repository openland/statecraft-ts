import { DB } from '../tables'
import { Context } from './Context';

export const Schema = `
    type User {
        id: ID!
        name: String!
        firstName: String!
        lastName: String!
        picture: String!
    }
    extend type Query {
        me: User
    }
`

export const Resolver = {
    Query: {
        me: async function (_obj: any, _params: {}, context: Context) {
            if (context.uid == null) {
                return null
            } else {
                var res = await DB.User.findById(context.uid)!!
                return {
                    id: res!!.id,
                    name: res!!.firstName + " " + res!!.lastName,
                    firstName: res!!.firstName,
                    lastName: res!!.lastName,
                    picture: res!!.picture
                }
            }
        }
    }
}