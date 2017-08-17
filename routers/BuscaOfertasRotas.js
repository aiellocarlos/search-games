module.exports = function(application){

	console.log(application.models);

	//Instanciando a camada de neogico de Busca de Ofertas
	var buscaOfertasModel = new application.models.BuscaOfertasModel(application);

	//Servico de localizar ofertas de Jogos.
	application.get('/jogo/nome/:nomeJogo', function (req, res) {

		var nomeJogo = req.params.nomeJogo;

		buscaOfertasModel.buscaJogo(nomeJogo, function(data){
			res.end(data);
		});

	});

	//Servico de localizar ofertas de Consoles.
	application.get('/console/nome/:nomeConsole', function (req, res) {

		var nomeConsole = req.params.nomeConsole;

		buscaOfertasModel.buscaConsole(nomeConsole, function(data){
			res.end(data);
		});
	});


	//Servico de localizar ofertas de Consoles e Jogos.
	application.get('/todos/nome/:nome', function (req, res) {

		var nome = req.params.nome;

		buscaOfertasModel.buscaConsoleEJogo(nome, function(data){
			res.end(data);
		});
	});


}
