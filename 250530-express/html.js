var express = require ('express');                                                          //aqui declaramos uma variável que contem o módulo express, que estamos pegando na pasta node_modules
var app = express();
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    res.render('teste');
});
const PORTA = 1337
app.listen(PORTA, function() {
    console.log('Example app listening on port '+PORTA);
});