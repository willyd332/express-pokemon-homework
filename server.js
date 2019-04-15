const express = require('express');
const app = express();
const pokemon = require('./modules/pokemon');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use(express.static('./public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.get('/pokemon', function(req,res){
  res.render('index.ejs',{
    pokemon: pokemon
  });
})

app.get('/pokemon/new', function(req,res){
  res.render('new.ejs')
})

app.get('/pokemon/:id', function(req,res){
  res.render('show.ejs',{
    pokemon: pokemon,
    i: req.params.id
  });
})

app.post('/pokemon', function(req,res){
  pokemon.push(req.body)
  res.redirect('/pokemon')
})

app.delete('/pokemon/:id', function(req,res){
  pokemon.splice(req.params.id,1);
  res.redirect('/pokemon');
})














const port = 3000
app.listen(port, function() {
  console.log('servers up');
})

module.exports = app;
