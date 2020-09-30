const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
app.use(cors())
app.use(bodyParser.json())

const port = 5000
require('dotenv').config()

const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jbp81.mongodb.net/${process.env.DB_NAME}>?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const products = client.db(process.env.DB_NAME).collection("products");
    // perform actions on the collection object

    app.post('/addProduct', (req, res) => {
        const product = req.body
        products.insertOneJ(product)
            .then(result => {
                console.log(result)
            })

    })


});


app.listen(port)