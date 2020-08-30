const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./config/database");
const cors = require("cors");
const models = require("./models");
const jwt = require("./services/jwt");
const path = require("path");
const dotenv = require("dotenv");

//load config
dotenv.config({ path: './config/config.env' })

//set port
const PORT = process.env.PORT || 5000

class Server{
    constructor() {
        this.init();
    }

    init() {
        this.initPostgres().then(async () => {
            this.initHTTPServer();
            this.initControllers();
            this.initRoutes();
        })
    }

    initControllers() {
        this.userController = require("./controllers/user.js")();
    }


    initRoutes() {
        const userRoute = require("./routes/user.js")(this.userController);
        app.use("/api/user", userRoute.getRouter());
    }

    initPostgres() {
        return new Promise((resolve, reject) => {
            db.authenticate()
                .then(() => {
                    console.log("DB SUCCESSFULLY INITIALIZED");
                    resolve();
                })
                .catch(err => {
                    console.log(err);
                    reject(err);
            })
        })
    }


    initHTTPServer() {
        app.use(bodyParser.json());
        app.use(
            bodyParser.urlencoded({
                extended: true
            })
        );
        app.use(cors());
        app.listen(PORT, () => {
            console.log(`Server running on the port ${PORT}`);
        });
    }
}

const server = new Server();


