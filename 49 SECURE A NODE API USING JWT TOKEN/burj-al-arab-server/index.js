const express = require('express')
const app = express()
const bodyParser = require('body-parser');

const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
const port = 5000
const pass = "ArabianHorse79";
app.get('/', (req, res) => {
    res.send('Hello World!')
})



const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://arabian:ArabianHorse79@cluster0.jbp81.mongodb.net/burjAlArab>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const bookings = client.db("burjAlArab").collection("bookings");
    console.log('db connected successfully')
    // perform actions on the collection object
    app.post('/addBooking', (req, res) => {
        const newBooking = req.body;
        bookings.insertOne(newBooking)
            .then(result => {
                res.send(result.insertedCount > 0)
                console.log(result)
            })
        console.log(newBooking)
    })
    // client.close();
});


app.listen(port)