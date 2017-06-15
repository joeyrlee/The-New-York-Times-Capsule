const express = require('express');
const app = express();
const path = require('path');
const compression = require('compression');
const handleRequest = require('./requestHandler.js');

/* gzip (compress) static files before delivering to users */
app.use(compression());
app.use(express.static(path.join(__dirname, '../dist')));

app.use(function(req, res, next) {
  /* Enable CORS */
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  /* Enable Caching */
  res.header('Cache-Control', 'public, max-age=31557600');
  res.header('Last-Modified', 'public, max-age=31557600');
  next();
});


app.get('/newbooks/:date/:listName', function ({params}, res) {
  handleRequest(params.listName, res, params.date);
})

app.get('/newbook/:listName', function ({params}, res) {
  handleRequest(params.listName, res);
})

app.listen(3000);