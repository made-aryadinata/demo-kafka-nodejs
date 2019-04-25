const { NProducer } = require('sinek');

const connectProducer = async () => {
  const producer = new NProducer({
    noptions: {
      'metadata.broker.list': ['localhost:9092']
    }
  });
  await producer.connect();
  return producer;
};

module.exports = {
  connectProducer
};
