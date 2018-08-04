//Modulo centralizador do negocio de busca de Ofertas. 


var mercadoLivreModel;

//Definindo o encode type como utf-8
var options = {
                mimetypes: {
                        json: ["application/json", "application/json;charset=utf-8"]
                        
                    }
                };


function BuscaOfertas(app){

	//Criando instancias dos modulos de integracao.

	//Mercado Livre
	mercadoLivreModel = new app.models.MercadoLivreModel(options);	
}


//Funcao de negocio responsavel por localizar oferta de jogos.
BuscaOfertas.prototype.buscaJogo = function(nomeJogo, callback){

	var results = [];

	mercadoLivreModel.buscaJogo(nomeJogo, function(data){

		results = results.concat(data);

		//Ordenando as ofertas por menor preco.
		results.sort(function(a, b){
				return parseFloat(a.precoProduto) - parseFloat(b.precoProduto);
		});

		var dataBack = JSON.stringify(results); 

		callback(dataBack);
		return; 
	});
	
}	
	

//Funcao de negocio responsavel por localizar oferta de consoles.
BuscaOfertas.prototype.buscaConsole = function(nomeConsole, callback){

	var results = [];

	mercadoLivreModel.buscaConsole(nomeConsole, function(data){

		results = results.concat(data);

		//Ordenando as ofertas por menor preco
		results.sort(function(a, b){
				return parseFloat(a.precoProduto) - parseFloat(b.precoProduto);
		});


		var dataBack = JSON.stringify(results); 

		callback(dataBack);
		return;
	});

 }


 //Funcao de negocio responsavel por localizar oferta de consoles e jogos unificada.
BuscaOfertas.prototype.buscaConsoleEJogo = function(nome, callback){

	var results = [];

	mercadoLivreModel.buscaJogo(nome, function(data){

		results = results.concat(data);

		mercadoLivreModel.buscaConsole(nome, function(data){

			results = results.concat(data);

				//Ordenando as ofertas por menor preco.
				results.sort(function(a, b){
					return parseFloat(a.precoProduto) - parseFloat(b.precoProduto);
				});

			var dataBack = JSON.stringify(results); 

			callback(dataBack);
			return; 

		});	


	});
			

 }

//Exportando a classse de BuscaOfertas
 module.exports =  function(){

	return BuscaOfertas;
}