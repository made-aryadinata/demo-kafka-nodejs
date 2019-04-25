const { NConsumer } = require('sinek');

const connectConsumer = async (pubSub) => {
  const consumer = new NConsumer('notification', {
    noptions: {
      'metadata.broker.list': ['localhost:9092']
    },
    groupId: 'graphql-server'
  });

  consumer.on('error', (error) => console.error(error));

  await consumer.connect();
  consumer.consume((message, cb) => {
    console.log(message);
    const { value } = message;
    pubSub.publish('notification', {
      notification: {
        message: value
      }
    });
    cb();
  }, true, true);
}

module.exports = {
  connectConsumer
};
