from kafka import KafkaProducer

producer = KafkaProducer(bootstrap_servers='localhost:9092')

# topic 'my-topic'
producer.send('my-topic', b'Hello from other script')
producer.flush()

producer.close()
