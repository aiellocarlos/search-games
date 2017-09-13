# search-games-services

Camada de serviços em Rest com NodeJS que provê a busca de melhores preços Games e Consoles consolidando os produtos ofertados no 
Mercado Livre e no Buscapé.

Foram utilizados os seguintes módulos de apoio a aplicação : Express, Node Rest Client e EJS.

Para instalar os serviços de busca siga os seguintes passos:

1 - Faça o download do servidor NodeJs na URL https://nodejs.org/en/download/ .

2 - Abra um terminal no seu sistema operacional e torne corrente o diretório do projeto ex: cd search-games-services .

3 - Siga a seguinte ordem de instalação de módulos:
```
npm init

npm install express --save

npm install -g nodemon

npm install node-rest-client --save

npm install ejs --save

npm install consign --save

npm install winston --save

```

## Exemplos de chamada aos serviços de busca

Buscando pelos jogos com nome "mario":

```
http://localhost:5000/jogo/nome/mario
```

Buscando pelos consoles com nome "PS4":

```
http://localhost:5000/console/nome/PS4
```
Buscando por jogos e consoles relacionados a "MarioKart":

```
http://localhost:5000/todos/nome/MarioKart

```
## Autor

* **Carlos Aiello** - [aiellocarlos](https://github.com/aiellocarlos)

## Licença

MIT 
