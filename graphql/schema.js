const { gql } = require('apollo-server')

const schema = gql`
  input TransferInput {
    accountNumber: String!
    amount: Float!
  }

  type TransferResult {
    referenceNumber: String!
  }

  type Mutation {
    transfer(input: TransferInput): TransferResult
  }

  type Query {
    test: String
  }

  type Subscription {
    notification: Notification
  }

  type Notification {
    message: String
  }

  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`;

module.exports = schema;
