var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.set('views', './www/views')
require('./configuration/routes.js')(app);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});