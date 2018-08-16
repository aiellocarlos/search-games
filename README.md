![alt tag](screenshots/games-logo.jpg "Search Games Services.")

[![Build Status](https://travis-ci.org/aiellocarlos/search-games-services.svg?branch=master)](https://travis-ci.org/aiellocarlos/search-games-services)
# search-games-services

Camada de serviços em Rest com NodeJS que provê a busca de melhores preços Games e Consoles consolidando os produtos ofertados no 
Mercado Livre.

Foram utilizados os seguintes módulos de apoio a aplicação : Express, Node Rest Client, Consign, Winston e EJS.

Para instalar os serviços de busca siga os seguintes passos:

1 - Abra um terminal no seu sistema operacional e torne corrente o diretório do projeto ex: cd search-games-services .

2 - Execute o seguinte comando para iniciar a instalação de módulos:
```
npm install --save

```
3 - Inicie a aplicação com o comando:
```
node app

```

## Exemplos de chamada aos serviços de busca

Buscando pelos jogos com nome "mario":

```
URI: http://localhost:5000/jogo/nome/mario
Method: GET
```

Buscando pelos consoles com nome "PS4":

```
URI: http://localhost:5000/console/nome/PS4
Method: GET
```
Buscando por jogos e consoles relacionados a "MarioKart":

```

URI: http://localhost:5000/todos/nome/MarioKart
Method: GET
```
## Autor

* **Carlos Aiello** - [aiellocarlos](https://github.com/aiellocarlos)

## Licença

MIT 
