import express from "express";
import {postOrder} from "./service/index.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.post('/', postOrder);

app.listen(PORT, () => {
    console.log(`Serveur Commande démarré sur le port ${PORT}`);
});