const express = require('express');
const cors = require('cors'); 
const bodyParser = require('body-parser');
const fs = require("fs");



const app = express();

app.use(cors());


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.post("/add", (req, res) => {
    fs.readFile("./db.json", "utf8", (err, data) => {
        let x = data.fruit; 

        
    });

    res.send(req.body.title);
});



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});

 