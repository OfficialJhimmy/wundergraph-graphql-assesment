const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const federatedSchema = require('./federation/gateway/schema');

const app = express();

// Set up the GraphQL endpoint to use the federated schema
app.use('/graphql', graphqlHTTP({
  schema: federatedSchema,
  graphiql: true,  // Enable GraphiQL interface for testing
}));

// Start the server
app.listen(4000, () => {
  console.log('Federated Gateway running on http://localhost:4000/graphql');
});
