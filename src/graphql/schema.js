// default example of user datatype
export default `
scalar Date
type User{
    _id:String!,
    username:String!,
    password:String!
}

type Auth{
    token:String!
}

type Query{
    getUsers:[User]
}

type Mutation{
    addUser(username:String!, password:String!):Auth
}

schema{
query:Query,
mutation:Mutation
}




`;
