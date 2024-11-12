const { gql } = require('graphql');

const productSchema = gql`
  type Product {
    id: ID!
    name: String!
    price: Float!
  }

  type Query {
    getProducts: [Product]
  }
`;

module.exports = productSchema;
