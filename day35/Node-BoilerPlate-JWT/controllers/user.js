const jwt = require("../services/jwt");
const models = require("../models");
const bcrypt = require("bcrypt");
var Sequelize = require("sequelize");

class UserController{
    constructor() { }
    login(user)
    {
        return new Promise(async (resolve, reject) => {
            try {
                resolve({ data });
            }
            catch (err) {
                console.log(err);
                reject(err);
            }
      })
    }
}



module.exports = () => {
    return new UserController();
};