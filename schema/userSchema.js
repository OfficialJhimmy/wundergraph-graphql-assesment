const { gql } = require('graphql');

const userSchema = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    getUsers: [User]
  }
`;

module.exports = userSchema;
