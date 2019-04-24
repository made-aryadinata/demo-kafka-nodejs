const resolvers = {
  Mutation: {
    transfer: async (root, args, context) => {
      const { input } = args;
      await context.producer.send('transfer', JSON.stringify(input));
      return {
        referenceNumber: `${Math.floor(Math.random() * 100000000)}`.padStart('10', '0')
      };
    }
  },
  Subscription: {
    notification: {
      subscribe: (root, args, context) => {
        return context.pubSub.asyncIterator(['notification']);
      }
    }
  }
};

module.exports = resolvers;
