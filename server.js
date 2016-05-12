const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//set up routes
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

//start server
app.listen(PORT, function(){
	console.log('Listening on:  '+ PORT);
});
