var express = require('express');
var path = require('path');
var app = express();
var handleRequest = require('./requestHandler.js');

app.use(express.static(path.join(__dirname, '../client')));

app.get('/newbook/:listName', function ({params}, res) {
  handleRequest(params.listName, res);
})

app.listen(3000, function () {
  console.log('app listening on port 3000');
})