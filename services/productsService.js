const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Smartphone', price: 500 },
  ];
  
  const productResolvers = {
    Query: {
      getProducts: () => products,
    },
  };
  
  module.exports = productResolvers;
  