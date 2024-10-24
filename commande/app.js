import express from "express";
import {postOrder} from "./service/index.js";
import cors from 'cors';

const app = express();
const PORT = 3000;
app.use(cors());

app.use(express.json());
app.post('/', postOrder);

app.listen(PORT, () => {
    console.log(`Serveur Commande démarré sur le port ${PORT}`);
});