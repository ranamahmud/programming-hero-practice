const express = require('express')
const app = express()
const port = 5000
const pass = "ArabianHorse79";
app.get('/', (req, res) => {
    res.send('Hello World!')
})



const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://arabian:ArabianHorse79@cluster0.jbp81.mongodb.net/burjAlArab>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("test").collection("booking");
    console.log('db connected successfully')
    // perform actions on the collection object
    client.close();
});


app.listen(port)