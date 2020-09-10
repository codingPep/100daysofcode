const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(process.env.KEY);
const uuid = require("uuid/v4");

const app = express();


app.use(express.json());
app.use(cors());
require('dotenv').config()

app.get("/", (req, res) => {
    res.send("Hey Jaya!");
});

app.post("/payment", (req, res) => {
    const { product, token } = req.body;
    console.log("Product", product);
    console.log("Price", product.price);
    const idempontencyKey = uuid();

    return stripe.consumers
        .create({
            email: token.email,
            source: token.id
        })
        .then(customer => {
            stripe.charges.create({
                amount: product.price * 100,
                currency: "usd",
                customer: customer.id,
                receipt_email: token.email,
                description: `purchase of ${product.name}`,
                shipping: {
                    name: token.card.name,
                    address: {
                        country: token.card.address_country
                    }
                }
            }, { idempontencyKey });
        })
        .then(result => res.status(200).json(result))
        .catch(err => console.log(err));
});


app.listen(8282, () => console.log("Port listening on 8282"));