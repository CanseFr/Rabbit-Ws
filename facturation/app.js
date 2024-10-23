import express from 'express';
import {getCommandeFromQueue} from "./brooker/index.js";

const app = express();
const PORT = 3001;


app.listen(PORT, () => {
    console.log(`Serveur Facture démarré sur le port ${PORT}`);
    getCommandeFromQueue();
});