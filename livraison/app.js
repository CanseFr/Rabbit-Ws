import express from 'express';
import { getCommandeFromQueue } from "./broker/index.js";

const app = express();
const PORT = 3002;

app.listen(PORT, () => {
    console.log(`Serveur Livraison démarré sur le port ${PORT}`);
    getCommandeFromQueue();
});
