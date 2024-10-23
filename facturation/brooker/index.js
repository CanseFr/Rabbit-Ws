import amqp from "amqplib/callback_api.js";
import {editInvoice, paiementByApi} from "../service/index.js";

const sendToDeliveryQueue = (pizza) => {
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

            channel.sendToQueue(queue, Buffer.from(JSON.stringify(pizza)));
            console.log(" [x] Sent to delivery: %s", pizza);
        });
    });
};

export const getCommandeFromQueue = () => {
    amqp.connect('amqp://localhost', (error0, connection) => {
        if (error0) {
            throw error0;
        }
        connection.createChannel((error1, channel) => {
            if (error1) {
                throw error1;
            }
            const queue = 'commande-to-facturation';

            channel.assertQueue(queue, {
                durable: false
            });
            console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

            channel.consume(queue, (msg) => {
                const pizza = JSON.parse(msg.content.toString());
                console.log(" [x] Received pizza: %s", pizza);

                if (paiementByApi()) {
                    editInvoice(pizza);
                    console.log("Paiement réussi pour: ", pizza);
                    sendToDeliveryQueue(pizza);
                } else {
                    console.log("Échec du paiement pour: ", pizza);
                }
            }, {
                noAck: true
            });
        });
    });
};
