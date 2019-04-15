const express = require('express');
const app = express();
const pokemon = require('./modules/pokemon');

app.use(express.static('./public'))


app.get('/pokemon', function(req,res){
  res.render('index.ejs',{
    pokemon: pokemon
  });
})

app.get('/pokemon/:id', function(req,res){
  res.render('show.ejs',{
    pokemon: pokemon,
    i: req.params.id
  });
})
















const port = 3000
app.listen(port, function() {
  console.log('servers up');
})
