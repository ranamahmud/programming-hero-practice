const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const bodyParser = require('body-parser');
const cors = require('cors');
// const body - parser = require('body-parser');

const password = "rana123"



const uri = "mongodb+srv://rana123:rana123@cluster0.jbp81.mongodb.net/organicdb>?retryWrites=true&w=majority";

const app = express();
app.use(bodyParser.json());
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(urlencodedParser)

app.get('/', (req, res) => {
    // res.send('hello I am working')
    res.sendFile(__dirname + '\\index.html')
})




const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const ProductCollection = client.db("organicdb").collection("products");

    app.get('/products', (req, res) => {
        ProductCollection.find({})
            .toArray((err, documents) => {
                res.send(documents);
            })
    })

    app.get('/product/:id', (req, res) => {
        ProductCollection.find({ _id: ObjectId(req.params.id) })
            .toArray((err, documents) => {
                res.send(documents[0])
            })
    })
    console.log("database connected")
    // perform actions on the collection object
    // const product = { name: "modhu", price: 25, quantity: 20 };
    app.post("/addProduct", (req, res) => {
        const product = req.body;
        ProductCollection.insertOne(product)
            .then(result => {
                console.log("Data added successfully")
                res.send('success');
            })
    })

    app.delete("/delete/:id", (req, res) => {

        ProductCollection.deleteOne({ _id: ObjectId(req.params.id) })
            .then((result) => {
                console.log(result)
            })
    })


    app.patch("/update/:id", (req, res) => {
        console.log(req.body.price)
        ProductCollection.updateOne({ _id: ObjectId(req.params.id) },

            {
                $set: { price: req.body.price, quantity: req.body.quantity },
                $currentDate: { lastModified: true }
            })
            .then((result) => {
                console.log(result)
            })
    })
    // client.close();
});

app.listen(3000);
