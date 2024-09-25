const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my-producer",
  brokers: ["domain:port"],
});

const producer = kafka.producer();

const run = async () => {
  await producer.connect();
  await producer.send({
    topic: "simple-topic",
    messages: [{ value: "Hello KafkaJS!" }],
  });
  await producer.disconnect();
};

run().catch(console.error);
