var app = require('./config/server');
var winston = require('winston');


app.listen(5000, function () {

	winston.info('Iniciando %s at %s', '[Search Games]', new Date());
});
