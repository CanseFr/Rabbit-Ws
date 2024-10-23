var amqp = require('amqplib/callback_api');
const express = require('express')
const app = express()
const port = 3000

app.post('/', (req, res) => {
    res.send('Commandé effectué')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

