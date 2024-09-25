const { Kafka } = require("kafkajs");

// Σύνδεση με τον Kafka broker
const kafka = new Kafka({
  clientId: "my-consumer",
  brokers: ["domain:port"],
});

const consumer = kafka.consumer({ groupId: "test-group" });

const run = async () => {
  // Σύνδεση με τον consumer
  await consumer.connect();

  // Εγγραφή στο topic
  await consumer.subscribe({ topic: "simple-topic", fromBeginning: true });

  // Ανάγνωση των μηνυμάτων
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      });
    },
  });
};

run().catch(console.error);
