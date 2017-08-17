//Modulo de configuracoes globais da aplicacao.

//Framework Express
var express = require('express'); 
var app = express();

//Framework Carregador de Modulos
var consign = require('consign'); 

//Framework de Apresentacao EJS 
app.set('view engine', 'ejs');
app.set('views', './views');



//Adicionando os modulos da camada de 
//negocio e rotas  
consign().then('./models').include('./routers').into(app);


//Exportando a app
module.exports = app;
