const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');

const {typeDefs}  = require("./Schema/TypeDefs");
const  {resolvers} = require("./Schema/Resolvers");
const express = require('express');
const http = require('http');

// const app =  new express();

// const server = new ApolloServer({ typeDefs, resolvers });

// server.applyMiddleware({app})

// app
//   .listen({port: 5000}, () => {
//     console.log(`server running at 5000`)
//   })


// import { ApolloServer } from 'apollo-server-express';
// import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
// import express from 'express';
// import http from 'http';

async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  server.applyMiddleware({ app });

  await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));
  
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer(typeDefs, resolvers)
