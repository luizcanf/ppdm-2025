var express = require ('express');                                                          //aqui declaramos uma variável que contem o módulo express, que estamos pegando na pasta node_modules
var app = express();
app.get('/', function (req, res) {
    res.send('Hello Express!');
});
app.get('/teste', function (req, res) {
    res.send('Hello Teste!');
});
app.listen(1337, function() {
    console.log('Example app listening on port 3000!');
});                                                                                             // listen inicia um servidor, e colocamos ele para escutar a porta 3000. Ele responde com "Hello World!"