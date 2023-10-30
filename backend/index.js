const express = require('express');
const cors = require('cors'); 

const app = express();



app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.post("/add", (req, res) => {
    res.send("Hello, World!");
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});

app.use(cors()); 