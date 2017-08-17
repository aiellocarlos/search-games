//Modulo de negocio e integracao com a API do Mercado Livre.
var winston = require('winston');
var options;

function MercadoLivre(options){
	this.options = options;
}

//Classificacoes
var gold = 'gold';
var silver = 'silver';
var platinum = 'platinum';



var Client = require('node-rest-client').Client;
var client = new Client(options);


 //Funcao de integracao com API do Mercado Livre para localizar Jogos por nome.
MercadoLivre.prototype.buscaJogo = function(nomeJogo , callback){

	var urlBuscaOfertas = 'https://api.mercadolibre.com/sites/MLB/search?q='+ nomeJogo+'&category=MLB1144';
	var result = [];
	

	var req = client.get(urlBuscaOfertas, function (data, response) {

		 	var classificacao = 0;
		  		
			for (var i=0 ; i < data['results'].length; i++){

				MercadoLivre.prototype.buscaNomeVendedor(data['results'][i]['seller']['id'], data, i, function(nomeVendedor , dataProduto , indice){

					if (dataProduto['results'][indice]['seller']['power_seller_status'] != null){
						classificacao = MercadoLivre.prototype.defineClassificacao(dataProduto['results'][indice]['seller']['power_seller_status']);
					}
				
					result.push({
			  		         nomeProduto : dataProduto['results'][indice]['title'], 
			  		         linkLoja : dataProduto['results'][indice]['permalink'], 
			  		         iconeProduto : dataProduto['results'][indice]['thumbnail'],
			  		         precoProduto :  dataProduto['results'][indice]['price'],
			  		         nomeVendedor :  nomeVendedor,
			  		         origem : 'MercadoLivre',
			  		         classificacao: classificacao
			  		     });

					

					if (result.length == dataProduto['results'].length){
						callback(result); 	   
						return;
					}	
					 
				});

				
			}	 
	 	
	});		

	req.on('error', function (err) {		
	  winston.error('Ocorreu uma falha em tentar acessar o servico => ' + urlBuscaOfertas + ' %s at %s' , ' [Search Games] ', new Date());
	  callback(result);	 
	  return
	});
	
}

//Funcao de definicao da classificacao do Mercado Livre.
MercadoLivre.prototype.defineClassificacao = function(rating){

	if (rating == platinum){
	 		return 3;
	 	} else if (rating == gold){
	 		return 2;
	 	} else if (rating == silver){
	 		return 1;
	 	} 	else {
	 	return 0;
	 }
}	

 //Funcao de integracao com a API do Mercado Livre para localizar o nome de um vendedor.
MercadoLivre.prototype.buscaNomeVendedor = function(id , dataProduto , indice, callback){

	var urlDetalheVendedor = 'https://api.mercadolibre.com/users/' + id;
	var nomeVendedor = '';
	 

	var req = client.get(urlDetalheVendedor, function (data, response) {

	
		nomeVendedor = data['nickname'];

	 	callback(nomeVendedor, dataProduto , indice); 	   
		return;
	});		

	req.on('error', function (err) {		
      winston.error('Ocorreu uma falha em tentar acessar o servico => ' + urlDetalheVendedor + ' %s at %s' , ' [Search Games] ', new Date());
	  callback(result);	 
	  return
	});


}	

 //Funcao de integracao com API do Mercado Livre para localizar Consoles por nome.
MercadoLivre.prototype.buscaConsole = function(nomeConsole, callback){

	var urlBuscaOfertas = 'https://api.mercadolibre.com/sites/MLB/search?q=Console '+ nomeConsole+'&category=MLB1144';
	var result = [];
	
	var req = client.get(urlBuscaOfertas, function (data, response) {

		 	var classificacao = 0;
		  		
			for (var i=0 ; i < data['results'].length; i++){

				MercadoLivre.prototype.buscaNomeVendedor(data['results'][i]['seller']['id'], data, i, function(nomeVendedor , dataProduto , indice){

					classificacao = MercadoLivre.prototype.defineClassificacao(dataProduto['results'][indice]['seller']['power_seller_status']);

					result.push({
			  		         nomeProduto : dataProduto['results'][indice]['title'], 
			  		         linkLoja : dataProduto['results'][indice]['permalink'], 
			  		         iconeProduto : dataProduto['results'][indice]['thumbnail'],
			  		         precoProduto :  dataProduto['results'][indice]['price'],
			  		         nomeVendedor :  nomeVendedor,
			  		         origem : 'MercadoLivre',
			  		         classificacao: classificacao
			  		     });

					

					if (result.length == dataProduto['results'].length){
						callback(result); 	   
						return;
					}	
					 
				});

				
			}
	 	
	});		

	req.on('error', function (err) {		
	  winston.error('Ocorreu uma falha em tentar acessar o servico => ' + urlBuscaOfertas + ' %s at %s' , ' [Search Games] ', new Date());
	  callback(result);	 
	  return
	});


}	
//Exportando a classe de negocio do Mercado Livre.
module.exports = function (){

	return MercadoLivre;
}