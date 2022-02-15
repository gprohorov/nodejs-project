import express from "express";
const server = express();
const PORT = 3000;
console.log("Hello, Node and ExpressJS");

server.get("/title", (req, res) => {
    res.send('Hello World!');
});

server.listen(PORT, () =>{
    console.log(" Port")
});

