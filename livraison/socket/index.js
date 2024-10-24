import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Un client est connecté');

    ws.on('message', (message) => {
        console.log(`Message reçu: ${message}`);
    });

});

export const deliveryAlertOnSocket = (message) => {
    const messageString = typeof message === 'string' ? message : JSON.stringify(message); // Convertit le message en chaîne
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(messageString);
        }
    });
};
