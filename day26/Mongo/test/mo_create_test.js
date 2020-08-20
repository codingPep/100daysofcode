const Student = require("../app/Student")
const assert = require('assert');


//create test
describe('Create Tests', () => {
    it('Create a user in DB', () => {
        // assert(true);
        const sam = new Student({ name: "sam" });
        sam
            .save()
            .then(() => {
                assert(!sam.isNew);
            })
            .catch(() => {
            console.log('Error')
        })


    })
})

//read test
describe('Read Tests', () => {
    let reader;
    beforeEach((done) => {
        reader = new Student({ name: "Reader" })
        reader.save()
            .then(() => {
            done()
        })
    })

    it('Read a user:Reader', (done) => {
        Student.find({ name: "Reader" })
            .then((students) => {
                assert(reader._id.toString() === student[0]._id.toString())
                done();
        })
    })
})


//Delete tests
describe('Delete Tests', () => {
    let deleter;
    beforeEach((done) => {
        deleter = new Student({ name: "Deleter" })
        deleter.save()
            .then(() => {
            done()
        })
    })

    it('Delete a user:Deleter', (done) => {
        Student.findByIdAndDelete(deleter._id)
            .then(() => Student.findOne({ name: "Deleter" }))
            .then((student) => {
                assert(student === null)
                done();
            })

    })
})



//update test
describe('Update Tests', () => {
    let updater;
    beforeEach((done) => {
        updater = new Student({ name: "Updater" })
        updater.save()
            .then(() => {
            done()
        })
    })

    it('Set n Save ', (done) => {
        updater.set("name", "UpUpdater");
        updater.save()
            .then(() => Student.find())
            .then(student => {
                assert(student[0].name !== "Updater")
            })
    })
})