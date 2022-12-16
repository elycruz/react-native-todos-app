
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const graphqlTypeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type Todo {
    id: ID!
    title: String!
    description: String!
    created: Int!
    updated: Int
  }

#  type Term {
#    name: String!
#    alias: String!
#  }
#
#  type TermTaxonomy {
#    alias: String!
#    taxonomy: String!
#    description: String
#    parent: String
#    order: Int
#  }

  # Todos queries
  type Query {
    todos: [Todo!]!
  }
`;
