const express = require('express');

const app = express();

app.get(`/`, (req, res) => {
    res.send('<h1>Hello World</h1>');
    res.end();
});
app.listen(5000, (err) => {
    if (err) throw err;
    console.log("server running");
});