const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

//port and server
var PORT = 8080;
console.log("now serving on PORT: ", PORT)

app.listen(PORT);