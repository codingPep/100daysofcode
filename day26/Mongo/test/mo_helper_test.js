const mongoose = require('mongoose')
mongoose.Promise=global.Promise//ES6 Promise

before(() => {
    mongoose.connect("mongodb://localhost/mongotube", { useNewUrlParser: true });
    
    mongoose.connection
    .once("open", () => console.log("connected..."))
        .on("error", error => console.log("Your Error:", error));
})

beforeEach((done) => {
    mongoose.connection.collections.Student.drop(() => {
        done();
        })
    }) 