const { NConsumer } = require('sinek');
const sleep = require('sleep-promise');

const consumer = new NConsumer(['notification'], {
  noptions: {
    'metadata.broker.list': 'localhost:9092',
    'group.id': 'graphql-server'
  }
});

consumer.on('error', (error) => console.error(error));

const connectConsumer = async (pubSub) => {
  await consumer.connect();
  console.info('connected!')
  consumer.consume(async (message, cb) => {
    pubSub.publish('notification', { message })
    await sleep(2000)
  }, true, false);
};

module.exports = {
  connectConsumer
};
