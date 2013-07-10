var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

var readData = fs.readFileSync('index.html', "utf-8", function (err, data) {
  if (err) throw err;
  console.log("Data read: " + data);
  return data;
});

app.get('/', function(request, response) {

  response.send(readData);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
