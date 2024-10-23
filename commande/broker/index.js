import amqp from "amqplib/callback_api.js";
import {handleOrder} from "../service/index.js";

export const sendCommandeOnFacturationQueue = (pizzaObject) => {
    amqp.connect('amqp://localhost', function(error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function(error1, channel) {
            if (error1) {
                throw error1;
            }
            const queue = 'commande-to-facturation';

            channel.assertQueue(queue, {
                durable: false
            });

            handleOrder()

            const message = JSON.stringify(pizzaObject);
            channel.sendToQueue(queue, Buffer.from(message));
            console.log(" [x] Sent: %s", message);
        });
    });
}