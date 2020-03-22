#Qui prend quoi - Maxime ZINUTTI

##Installation
- `npm install`
- `npm run start`

##Amelioration
- Affichage des items
- Suppression d'items
- Style des pages


##Article
En suite express.js comparé a Symfony que j'ai plus utilisé c'est pas fou, le code ca devient vite le bordel apres pour faire un petit projet ca peut etre cool et c'est quand meme pas mal si on a une api a coté.<br>
```js
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
```
Sur cette exemple, si je compare ça à une fonction dans un controller Symfony, c'est concis au niveau du code mais la lisibilité est pas forcément évidente. 

##Autre
Personnelement je voulais faire le TP en Typescript parce que je voulais apprendre cette techno sauf que je commencais a prendre pas mal de retard apres la 1ere journée donc j'ai fais ca comme dans les explications, en tant que back j'avais pas mal de truc à assimiler juste avec tout ça.
