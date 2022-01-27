import "reflect-metadata";
import {Container} from "typedi";
import * as TypeORM from "typeorm";
import express from "express";
import cors from "cors";
import {setRouter} from "./router";
import createSchema from "./schema";
import {ApolloServer} from "apollo-server-express";

const bootstrap = async () => {
  const host = '0.0.0.0',
    port = 3000;

  try {
    // create TypeORM connection
    await TypeORM.createConnection();

    // build TypeGraphQL executable schema
    const schema = await createSchema(Container);

    // Create GraphQL server
    const server = new ApolloServer({
      schema,
      context: ({ req, res }) => ({ req, res }),
      debug: true
    });

    const app = express();
    server.applyMiddleware({ app });

    app.use(cors());
    app.use(express.json());
    setRouter(app);

    app.listen({port}, () => {
      console.log(
        `Server running at http://${host}:${port}${server.graphqlPath}`
      );
    });
  } catch (err) {
    console.error(err);
  }
};

bootstrap();
