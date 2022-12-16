import {graphqlTypeDefs as typeDefs} from "../../server/graphql-type-defs.ts";
import {graphqlResolvers as resolvers} from "../../server/graphql-resolvers.ts";

import {createSchema} from 'graphql-yoga'

const schema = createSchema({
  typeDefs,
  resolvers
});

export default schema;
