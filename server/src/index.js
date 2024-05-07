import { ApolloServer, gql } from "apollo-server";

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// Parses the defined GraphQL schema.
const typeDefs = gql`
    type Query {
        appName: String
    }
`;

const resolvers = {
    Query: {
        appName: () => "ProductHunt clone", // implements the appName query
    },
};

server.listen().then(() => {
    console.log("Listening on port 4000");
});