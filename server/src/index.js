import { ApolloServer } from "apollo-server";
import readSchema from "./schema.js";

// Parses the defined GraphQL schema.
const typeDefs = readSchema();

const resolvers = {
    Query: {
        appName: () => "ProductHunt clone", // implements the appName query
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(() => {
    console.log("Listening on port 4000");
});
