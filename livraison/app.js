import express from 'express';
import {getDelivery} from "./service/index.js";

const app = express();
const PORT = 3002;

app.get('/', getDelivery);

app.listen(PORT, () => {
    console.log(`Serveur Livraison démarré sur le port ${PORT}`);
});
