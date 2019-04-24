const { ApolloServer } = require('apollo-server')

const { connectConsumer } = require('./consumer');
const { connectProducer } = require('./producer');

const pubSub = require('./pubSub');
const resolvers = require('./resolvers')
const typeDefs = require('./schema')

const startServer = async () => {
  await connectConsumer(pubSub);
  const producer = await connectProducer();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
      pubSub,
      producer
    }
  });

  const { url } = await server.listen();
  console.log(`Server is running on ${url}`);
}

startServer();
