var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
});

app.get('/products', function(req, res) {
  res.json([
    {name: 'iphone 6', cost: 300}, 
    {name: 'soap', cost: 2},
    {name: 'juice', cost: 5},
    {name: 'batteries', cost: 5}
  ])
});

var port = 3000;
app.listen(port, function() {
  console.log('server listening on port ' + port); 
});
