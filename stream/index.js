const { KafkaStreams } = require('kafka-streams');

const factory = new KafkaStreams({
  noptions: {
    'metadata.broker.list': ['localhost:9092'],
    'group.id': 'stream'
  }
});

const kStream = factory.getKStream('transfer');

kStream
.mapStringValueToJSONObject()
.map(({ value }) => {
  console.log(value);
  return `Anda baru saja mengirim ${value.amount} ke ${value.accountNumber}`;
})
.to('notification');

kStream
.start()
.then(() => console.log('Kafka stream started'))
.catch(e => console.error(e));
