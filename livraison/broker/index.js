import amqp from "amqplib/callback_api.js";
import {doDelivery, handleDelivery} from "../service/index.js";

const getCommandeFromQueue = () => {
    amqp.connect('amqp://localhost', (error0, connection) => {
        if (error0) {
            throw error0;
        }
        connection.createChannel((error1, channel) => {
            if (error1) {
                throw error1;
            }
            const queue = 'facturation-to-delivery';

            channel.assertQueue(queue, {
                durable: false
            });
            console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

            channel.consume(queue, (msg) => {
                const pizza = JSON.parse(msg.content.toString());
                console.log(" [x] Received pizza for delivery: %s", pizza);

                handleDelivery(pizza);
                doDelivery()
            }, {
                noAck: true
            });
        });
    });
};



export { getCommandeFromQueue };
