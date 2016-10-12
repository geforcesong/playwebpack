var express = require('express');
const path = require('path');
var app = express();
app.set('view engine', 'ejs');
app.set('views', './www/views')
app.use(express.static(path.resolve(__dirname, 'public'), {
  maxAge: 10000000
}));


require('./configuration/routes.js')(app);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});