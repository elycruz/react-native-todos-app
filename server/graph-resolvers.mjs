// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const graphResolvers = {
  Query: {
    todos: () => [{
      id: 99,
      title: 'Todo',
      description: 'Todo Description',
      created: 0,
      updated: 0
    }],
  },
};
