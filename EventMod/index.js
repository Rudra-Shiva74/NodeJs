const EventEmitter = require("events");
const events = new EventEmitter();
events.on('sayName', () => {
    console.log("Abhishek Tiwari");
})
events.emit('sayName');