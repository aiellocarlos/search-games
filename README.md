# search-games-services

Camada de serviços em Rest com NodeJS que provê a busca de melhores preços Games e Consoles consolidando os produtos ofertados no 
Mercado Livre e no Buscapé.

Foram utilizados os seguintes módulos de apoio a aplicação : Express, Node Rest Client e EJS.

Para instalar os serviços de busca siga os seguintes passos:

1 - Faça o download do servidor NodeJs na URL https://nodejs.org/en/download/ .

2 - Abra um terminal no seu sistema operacional e torne corrente o diretório do projeto ex: cd chat-node-js-express .

3 - Siga a seguinte ordem de instalação de módulos:
```
npm init

npm install express --save

npm install -g nodemon

npm install node-rest-client --save

npm install ejs --save

npm install consign --save

```

## Exemplos de chamada aos serviços de busca

Buscando pelos jogos com nome "mario":

```
https://localhost:5000/jogo/nome/mario
```

Buscando pelos consoles com nome "PS4":

```
https://localhost:5000/console/nome/PS4
```
Buscando por jogos e consoles relacionados a "MarioKart":

```
https://search-games.herokuapp.com/todos/nome/MarioKart

```
## Autor

* **Carlos Aiello** - [aiellocarlos](https://github.com/aiellocarlos)

## Licença

MIT 
