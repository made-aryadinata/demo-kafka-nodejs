const { NProducer } = require('sinek');

const producer = new NProducer({
  noptions: {
    'metadata.broker.list': 'localhost:9092'
  }
});

const connectProducer = async () => {
  console.log('Connecting kafka producer...')
  await producer.connect();
  console.log('Kafka producer is connected!')
  return producer;
};

module.exports = {
  connectProducer
};
