const express = require('express');
const app = express();
const port = 3000;

app.set("view engine", "pug");

app.get('/', function(req, res) {
    res.render("index", {title: "Qui prend quoi ?"});
});

app.listen(port, () => console.log(`Front app listening on port ${port}!`));