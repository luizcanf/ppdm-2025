var express = require ('express');                                                          //aqui declaramos uma variável que contem o módulo express, que estamos pegando na pasta node_modules
var app = express();
app.use(express.json());
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('conta');
});
app.get('/operacoes', (req, res) => {
    let n1 = req.query.N1;
    let n2 = req.query.N2;
    let total = parseFloat(n1) + parseFloat(n2);
    res.render('resultado', {total});
});
const PORTA = 8080
app.listen(PORTA, function() {
    console.log('Servidor rodando em http://localhost:'+PORTA);
});