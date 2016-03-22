'use strict';

//<requires>
var _ = require('underscore');
var express = require('express');
var bodyParser = require('body-parser');
var RestApi = require('./rest-api.js');
var PeopleResource = require('./people-resource.js');
//</requires>


//<api-setup>
var peopleApi = new RestApi('rest');
peopleApi.registerResource(new PeopleResource());
//</api-setup>


//<server-setup>
var HOST = '127.0.0.1';
var PORT = '8090';

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//<api-app-integration>
app.use('/', peopleApi.router());
//</api-app-integration>

app.use(express.static('public'));

var server = app.listen(PORT, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Server running at http://' + HOST + ':' + PORT);
});
//</server-setup>
