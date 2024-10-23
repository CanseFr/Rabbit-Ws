import express from "express";
import {getOrder} from "./service/index.js";

const app = express();
const PORT = 3000;

app.get('/', getOrder);

app.listen(PORT, () => {
    console.log(`Serveur Commande démarré sur le port ${PORT}`);
});