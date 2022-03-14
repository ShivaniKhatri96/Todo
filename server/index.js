import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import typeDefs from "./typeDefs.js";
import resolvers from "./resolvers.js";

async function initServer() {
  const app = express();
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.use((req, res) => {
    res.send("Server started successfully");
  });
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () =>
    console.log(`Express server is running on port ${PORT}`)
  );
}
initServer();