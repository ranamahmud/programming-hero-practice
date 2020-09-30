const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;

console.log(process.env.DB_USER);

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jbp81.mongodb.net/burjAlArab>?retryWrites=true&w=majority`;

const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())




var serviceAccount = require("./burj-al-arab-a2d7d-firebase-adminsdk-qp4ki-870c0ceeb1.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIRE_DB
});


const port = 5000
const pass = "ArabianHorse79";
app.get('/', (req, res) => {
    res.send('Hello World!')
})



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
            })
    })

    app.get('/bookings', (req, res) => {
        const bearer = req.headers.authorization;
        if (bearer && bearer.startsWith('Bearer ')) {
            const idToken = bearer.split(' ')[1];



            // idToken comes from the client app
            admin.auth().verifyIdToken(idToken)
                .then(function (decodedToken) {
                    let uid = decodedToken.uid;
                    let tokenEmail = decodedToken.email;
                    let queryEmail = req.query.email;
                    if (tokenEmail == queryEmail) {
                        bookings.find({
                            email: queryEmail
                        })
                            .toArray((err, documents) => {
                                res.status(200).send(documents)
                            })
                    } else {

                        res.status(401).send('unauthorized access')
                    }
                    // ...
                }).catch(function (error) {

                    res.status(401).send('unauthorized access')
                });
        } else {

            res.status(401).send('unauthorized access')
        }



    })
    // client.close();
});


app.listen(port)