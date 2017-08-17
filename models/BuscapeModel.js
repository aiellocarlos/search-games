//Modulo de negocio e integracao com a API do Buscape.

var winston = require('winston');

var options;

function Buscape(options){
	this.options = options;
}


//Credenciais de autenticacao do Buscape.
var appToken = 'SUA_APP_TOKEN_DO_BUSCAPE';
var sourceId = 'SEU_SOURCE_ID_DO_BUSCAPE';
var Client = require('node-rest-client').Client;
var client = new Client(options);

//Classificacoes
var diamante ='e-bit Excelente';
var ouro = 'e-bit Ótima';
var prata = 'e-bit Muito boa';
var bronze = 'e-bit Boa';

 
 //Funcao de integracao com API do Buscape para localizar Jogos por nome.
Buscape.prototype.buscaJogo = function(nomeJogo, callback){

	var categoriaJogos = 6409;


	var urlBuscaOfertasProducao = 'http://bws.buscape.com.br/service/v2/topOffers/buscape/'+appToken+'/BR/?sourceId='+sourceId+'&format=json&categoryId=' + categoriaJogos + '&keyword=' + nomeJogo;  
	var urlBuscaOfertasSandBox  = 'http://sandbox.buscape.com.br/service/v2/topOffers/buscape/'+appToken+'/BR/?sourceId='+sourceId+'&format=json&categoryId=' + categoriaJogos + '&keyword=' + nomeJogo;  
	var result = [];

	var urlServicoCorrente = urlBuscaOfertasSandBox;

	var req = client.get(urlServicoCorrente, function (data, response) {

			var classificacao = 0;
	
			 for (var i=0 ; i < data['offer'].length; i++){

			 	if (data['offer'][i]['seller']['sellerName'] =='Mercado Livre') { continue;}


			 	if (!(data['offer'][i]['seller']['rating']['eBitRating'] == null)){
			 		classificacao = Buscape.prototype.defineClassificacao(data['offer'][i]['seller']['rating']['eBitRating']['rating'])	;
			 	}

			  	result.push({
			  		         nomeProduto : data['offer'][i]['offerName'], 
			  		         linkLoja : data['offer'][i]['links']['link'][0]['url'], 
			  		         iconeProduto : data['offer'][i]['thumbnail']['url'],
			  		         precoProduto :  data['offer'][i]['priceValue'],
			  		         nomeVendedor : data['offer'][i]['seller']['sellerName'],
			  		         origem : 'Buscapé',
			  		         classificacao: classificacao
			  		     });	
			 }


		 callback(result);	   
		 return;
	});

	 
	req.on('error', function (err) {
	  winston.error('Ocorreu uma falha em tentar acessar o servico => ' + urlServicoCorrente + ' %s at %s' , ' [Search Games] ', new Date());
	  callback(result);	 
	  return
	});

}

//Funcao de definicao da classificacao do Buscape.
Buscape.prototype.defineClassificacao = function(rating){

	if (rating == diamante){
	 		return 4;
	 	} else if (rating == ouro){
	 		return 3;
	 	}else if (rating == prata){
	 		return 2;
	 	} else if (rating == bronze){
	 		return 1;
	 } 	else {
	 	return 0;
	 }

}	

 //Funcao de integracao com API do Buscape para localizar Consoles por nome.
Buscape.prototype.buscaConsole = function(nomeConsole, callback){


	var categoriaConsoleVideoGame = 6058;
	var urlBuscaOfertasProducao = 'http://bws.buscape.com.br/service/v2/topOffers/buscape/'+appToken+'/BR/?sourceId='+sourceId+'&format=json&categoryId=' + categoriaConsoleVideoGame + '&keyword=' + nomeConsole;  
	var urlBuscaOfertasSandBox  = 'http://sandbox.buscape.com.br/service/v2/topOffers/buscape/'+appToken+'/BR/?sourceId='+sourceId+'&format=json&categoryId=' + categoriaConsoleVideoGame + '&keyword=' + nomeConsole;  
	var result = [];

	var urlServicoCorrente = urlBuscaOfertasSandBox;

	var req = client.get(urlServicoCorrente, function (data, response) {

			var classificacao = 0;

			 for (var i=0 ; i < data['offer'].length; i++){

				if (data['offer'][i]['seller']['sellerName'] =='Mercado Livre') { continue;}

			 	if (data['offer'][i]['seller']['rating']['eBitRating'] != 'undefined'){
			 		classificacao = Buscape.prototype.defineClassificacao(data['offer'][i]['seller']['rating']['eBitRating']['rating'])	;
			 	}

			  	result.push({
			  		         nomeProduto : data['offer'][i]['offerName'], 
			  		         linkLoja : data['offer'][i]['links']['link'][0]['url'], 
			  		         iconeProduto : data['offer'][i]['thumbnail']['url'],
			  		         precoProduto :  data['offer'][i]['priceValue'],
			  		         nomeVendedor : data['offer'][i]['seller']['sellerName'],
			  		         origem : 'Buscapé',
			  		         classificacao: classificacao
			  		     });
			  	
			  }
		  
		 callback(result);	   
		 return;
	});

	req.on('error', function (err) {
	  winston.error('Ocorreu uma falha em tentar acessar o servico => ' + urlServicoCorrente + ' %s at %s' , ' [Search Games] ', new Date());
	  callback(result);	 
	  return
	});
}

//Exportando a classe de negocio do Buscape
module.exports =  function(){
	return Buscape;
}