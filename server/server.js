var express = require('express');
var path = require('path');
var compression = require('compression');
var app = express();
var handleRequest = require('./requestHandler.js');

app.use(compression())
app.use(express.static(path.join(__dirname, '../client')));

app.get('/newbooks/:date/:listName', function ({params}, res) {
  handleRequest(params.listName, res, params.date);
})

app.get('/newbook/:listName', function ({params}, res) {
  handleRequest(params.listName, res);
})

app.listen(3000);