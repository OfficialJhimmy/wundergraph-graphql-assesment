const { mergeSchemas } = require('@graphql-tools/merge');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { stitchSchemas } = require('@graphql-tools/stitch');
const userSchema = require('../userService/schema');
const productSchema = require('../productService/schema');

// Step 1: Merge user and product schemas
const mergedSchema = mergeSchemas({
  schemas: [
    makeExecutableSchema({ typeDefs: userSchema }),
    makeExecutableSchema({ typeDefs: productSchema })
  ]
});

// Step 2: Stitch schemas for federation
const federatedSchema = stitchSchemas({
  subschemas: [
    { schema: mergedSchema }
  ]
});

module.exports = federatedSchema;
