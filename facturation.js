var amqp = require('amqplib/callback_api');


amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }
        var queue = 'one';

        channel.assertQueue(queue, {
            durable: false
        });
        console.log(" [*] Waiting for messages in %s one. To exit press CTRL+C", queue);

        //
        channel.consume(queue, function(msg) {
            console.log(" [x] Received One %s", msg.content.toString());

        }, {
            noAck: true
        });

        //


    });
});

