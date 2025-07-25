var express = require ('express');                                                          //aqui declaramos uma variável que contem o módulo express, que estamos pegando na pasta node_modules
var app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('conta');
});
const rotaOperacoes = app.route('/operacoes')
rotaOperacoes.get((req, res) => {
    res.redirect('/');
})
rotaOperacoes.post((req, res) => {
    let n1 = req.body.N1;
    let n2 = req.body.N2;
    if (n2 == 0) {
        res.render('/erro', {msg: "Não é possível dividir por zero."});
    } else {
        let total = parseFloat(n1) / parseFloat(n2);
        res.render('resultado', {total});
    }
});
const PORTA = 8080
app.listen(PORTA, function() {
    console.log('Servidor rodando em http://localhost:'+PORTA);
});