import {buildSchema} from "type-graphql";
import {GQLGetProductsResolver} from "./resolver/get-products.resolver";

export default (container: any) => {
  return buildSchema({
    container: container,
    resolvers:[
      GQLGetProductsResolver
    ]
  })
}


// "dependencies": {
//   "apollo-server-express": "^3.6.2",
//     "class-validator": "^0.13.2",
//     "cors": "^2.8.5",
//     "express": "^4.17.2",
//     "graphql": "^16.3.0",
//     "pg": "^8.7.1",
//     "reflect-metadata": "^0.1.13",
//     "type-graphql": "^1.1.1",
//     "typedi": "^0.10.0",
//     "typeorm": "^0.2.41",
//     "typeorm-typedi-extensions": "^0.4.1",
//     "typescript": "^4.5.5"
// }
