const {
    Worker,
    isMainThread,
    parentPort
} = require('worker_threads');

if (isMainThread) {
    const worker = new Worker('./worker.js');
    worker.on('message', (msg) => {
        console.log(msg);
    });
} else {
    parentPort.postMessage('Hello world!!!!!!!!!!!!!');

}