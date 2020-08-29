const {
    workerData,
    parentPort
} = require('worker_threads');

const {
    Client
} = require('pg');
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'sample',
    password: 'abc123',
    port: 5432,
});

client.connect();
const query = `
SELECT *
FROM tests
`;
client.query(query, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    for (let row of res.rows) {
        parentPort.postMessage(row)
    }
    client.end();
});


// parentPort.postMessage("This is the sample text!")