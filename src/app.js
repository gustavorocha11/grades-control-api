import express from 'express';
const app = express();
import path from 'path';
const __dirname = path.resolve();

app.get('/', function(req, res){
    res.sendfile(`${__dirname}/html/index.html`);
});

app.get('/sobre', function(req, res){
    res.send('Bem vindos a minha pagina sobre!');
});

app.get('/blog', function(req, res){
    res.send('Bem vindos a minha pagina blog!');
});

app.get('/ola/:cargo/:nome/:cor', function(req, res){
    res.send("<h1>Olá "+req.params.nome+"</h1>"+"<h2>Seu Cargo é: "+req.params.cargo+"</h2>"+"<h3>Sua cor favorita é: "+req.params.cor);
});


app.listen(8081, function(){console.log("Servidor Rodando");});