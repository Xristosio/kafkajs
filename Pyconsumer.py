from kafka import KafkaConsumer

# Kafka broker
consumer = KafkaConsumer('my-topic', bootstrap_servers='localhost:9092')

# messages
for message in consumer:
    print(f"Received message: {message.value.decode('utf-8')}")
