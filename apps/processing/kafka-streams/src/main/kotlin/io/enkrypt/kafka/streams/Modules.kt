package io.enkrypt.kafka.streams

import org.apache.kafka.clients.consumer.ConsumerConfig
import org.apache.kafka.common.serialization.Serdes
import org.apache.kafka.streams.StreamsConfig
import org.koin.dsl.module.module
import java.util.Properties

object Modules {

  val kafkaStreams = module("kafkaStreams") {

    val config = get<AppConfig>()

    single(name = "baseKafkaStreamsConfig") {
      Properties().apply {
        // App
        put(StreamsConfig.BOOTSTRAP_SERVERS_CONFIG, config.kafka.bootstrapServers)
        put(StreamsConfig.PROCESSING_GUARANTEE_CONFIG, StreamsConfig.EXACTLY_ONCE)

        //
        put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, config.kafka.startingOffset)

        put(StreamsConfig.COMMIT_INTERVAL_MS_CONFIG, 1000) // important when dealing with aggregations/reduces

        // Serdes - Defaults
        put(StreamsConfig.DEFAULT_KEY_SERDE_CLASS_CONFIG, Serdes.String().javaClass.name)
        put(StreamsConfig.DEFAULT_VALUE_SERDE_CLASS_CONFIG, Serdes.ByteArray().javaClass.name)
      }
    }
  }
}
