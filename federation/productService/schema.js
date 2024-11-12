const { gql } = require('graphql-tag');

// Define the Product schema
const productSchema = gql`
  type Product {
    id: ID!
    name: String!
    price: Float!
    userId: ID!  // Reference to the user who owns the product
  }

  type Query {
    getProduct(id: ID!): Product
  }

  type Mutation {
    createProduct(name: String!, price: Float!): Product
  }

  extend type User {
    products: [Product]
  }
`;

module.exports = productSchema;
