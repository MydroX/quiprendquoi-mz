const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.set("view engine", "pug");
app.use(express.static('build'));
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function (req, res) {
    res.render("index", {title: "Qui prend quoi ?"});
});
app.post('/party', function (req, res) {
    axios
        .post(`${process.env.API_URL}/party`, req.body)
        .then(({ data }) => res.redirect(`/party/${data._id}`))
        .catch((err) => res.send(err));
});
app.get('/party/:id', function (req, res) {
    axios
        .get(`${process.env.API_URL}/party/${req.params.id}`)
        .then(({data}) =>
            res.render('party', {
                party: data,
                title: data.name,
                url: `${process.env.FRONT_URL}:${process.env.PORT}/party/${data._id}`,
                api: `${process.env.API_URL}`
            }),
        )
        .catch((err) => console.log(err));
});
app.post('/party/:id/items', function (req, res) {
    axios
        .post(`${process.env.API_URL}/party/${req.params.id}/items`, req.body)
        .then(({data}) => res.redirect(`/party/${req.params.id}`))
        .catch((err) => res.send(err));
});
app.get('/party/:id/items/:id_item/delete', function (req, res) {
    axios
        .delete(`${process.env.API_URL}/party/${req.params.id}/items/${(req.params.id_item)}`)
        .then(({ data }) => res.redirect(`/party/${req.params.id}`))
        .catch((err) => res.send(err));
});

app.listen(port, () => console.log(`Front app listening on port ${port}!`));