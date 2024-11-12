const { makeExecutableSchema } = require('graphql-tools');
const { mergeSchemas } = require('@graphql-tools/merge');
const userSchema = require('../schemas/userSchema');
const productSchema = require('../schemas/productSchema');
const userResolvers = require('./usersService');
const productResolvers = require('./productsService');

const mergedSchema = mergeSchemas({
  schemas: [userSchema, productSchema],
  resolvers: [userResolvers, productResolvers],
});

module.exports = mergedSchema;
