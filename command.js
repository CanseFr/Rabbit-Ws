var amqp = require('amqplib/callback_api');
const express = require('express')
const app = express()
const port = 3000

app.post('/', (req, res) => {
    amqp.connect('amqp://localhost', function(error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function(error1, channel) {
            if (error1) {
                throw error1;
            }
            var queue = 'commande';
            var msg = 'Envoyé depuis commande service';

            channel.assertQueue(queue, {
                durable: false
            });

            channel.sendToQueue(queue, Buffer.from(msg));
            console.log(" [x] Sent from one %s", msg);
        });
    });
    res.send('Commandé effectué')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

