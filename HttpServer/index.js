console.log("Abhishek Tiwari Http Server");

const http = require("http");
const server = http.createServer((req, resp) => {
    resp.end("Hello From the Abhishek");
});
server.listen(8080, "127.0.0.1", () => {
    console.log("Listning 8080 port");
})