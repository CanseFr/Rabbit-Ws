import {sendCommandeOnFacturationQueue} from "../broker/index.js";

export const postOrder = (req, res) => {
    const pizza = {
        name: req.body.name || "Unknown Pizza",
        prix: req.body.prix || "0"
    };

    sendCommandeOnFacturationQueue(pizza);

    res.send('Commande en cours d\'exécution');
};

export const handleOrder = ()=>{
    console.log("Commande validé")
}

