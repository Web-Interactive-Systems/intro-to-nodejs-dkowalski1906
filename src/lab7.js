const EventEmitter = require("events");

const myEmitter = new EventEmitter();

// Todo: Write listener 1
myEmitter.on('dataReceived', (data, token) => {
    console.log(`Received payload ${JSON.stringify(data, null, 2)} with token: ${token}`);
});

// Todo: Write listener 2
myEmitter.on('secondListener', () => {
    console.log("A second listener as well");
});

setInterval(() => {
    const data = { id: 1, message: "Hello, World!" };
    const token = "123456";

    myEmitter.emit('dataReceived', data, token);
    
    myEmitter.emit('secondListener');
}, 10000);