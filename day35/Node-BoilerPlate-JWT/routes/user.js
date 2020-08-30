const router = require("express").Router();
const jwt = require("../services/jwt");


class UserRoutes{
    constructor(UserController) {
        this.controller = UserController;
        this.init();
    }

    //User init
    init() {
        
        //Get user Route
        router.post("/get", jwt.verifyToken, async (req, res) => {
            try {
              //Access check function
                const decoded = await jwt.verify(req.token);
                if (decoded) {
                    const response = await this.controller.getUser(req.body);
                    res.json(response);
                }
                else {
                    res.json({ code: 500, msh: "Unauthorized user" });
                }
                
            } catch (err) {
                res.json({ code: 500, msg: "Getting user failed" });
            }
        })


        //Create User Route and call the necessary function in controller
    }
}