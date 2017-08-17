var app = require('./config/server');
var winston = require('winston');


/*

var buscaOfertasModel = new app.models.BuscaOfertasModel(app);



//Servico de localizar ofertas de Jogos.
app.get('/jogo/nome/:nomeJogo', function (req, res) {

	var nomeJogo = req.params.nomeJogo;

	buscaOfertasModel.buscaJogo(nomeJogo, function(data){
		res.end(data);
	});

});

//Servico de localizar ofertas de Consoles.
app.get('/console/nome/:nomeConsole', function (req, res) {

	var nomeConsole = req.params.nomeConsole;

	buscaOfertasModel.buscaConsole(nomeConsole, function(data){
		res.end(data);
	});
});


//Servico de localizar ofertas de Consoles e Jogos.
app.get('/todos/nome/:nome', function (req, res) {

	var nome = req.params.nome;

	buscaOfertasModel.buscaConsoleEJogo(nome, function(data){
		res.end(data);
	});
});

*/

app.listen(5000, function () {

	winston.info('Iniciando %s at %s', '[Search Games]', new Date());
});
