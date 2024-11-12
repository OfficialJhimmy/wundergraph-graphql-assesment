const productsData = [
    { id: '1', name: 'Laptop', price: 1500.0, owner: '1' },
    { id: '2', name: 'Smartphone', price: 900.0, owner: '2' }
  ];
  
  const resolvers = {
    Query: {
      getUser: (_, { id }) => ({
        id,
        name: `User ${id}`,
        email: `user${id}@example.com`
      })
    },
    User: {
      products: (user) => productsData.filter((product) => product.owner === user.id)
    }
  };
  
  module.exports = resolvers;
  