import express from 'express';
import {getInvoice} from "./service/index.js";

const app = express();
const PORT = 3001;

app.get('/', getInvoice);

app.listen(PORT, () => {
    console.log(`Serveur Facture démarré sur le port ${PORT}`);
});