import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import readSchema from "./schema.js";
import { resolvers } from "./resolver.js";

// Parses the defined GraphQL schema.
const typeDefs = readSchema();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
});

server.listen().then(() => {
    console.log("Listening on port 4000");
});
