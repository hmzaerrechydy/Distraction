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
    let title = req.body.title; 
    let body = req.body.body; 
    let tag = req.body.tag;  
    
    fs.readFile("./db.json", "utf8", (err, data) => {
        let read = JSON.parse(data); 

        read.items.push({
            "title": title, 
            "body": body, 
            "tag": tag
        })

        let write = JSON.stringify(read); 

        fs.writeFile("./db.json", write, "utf8", (error) => {
            if (error) {
              console.log(error);
            } else {
              console.log("writeFile complete");
            }
          });         
    });

    res.send("New Item Added");    
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});
