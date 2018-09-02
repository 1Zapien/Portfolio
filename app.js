
var express = require('express');
var http = require('http');
var path = require("path");
var exphbs  = require('express-handlebars');

var app = express();


app.set("port", process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, "public")));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



app.get('/', function (req, res) {
    res.render('home');
});
app.get('/about', function (req, res) {
    res.render('about');
});

app.set("port", process.env.PORT || 3000);



/*app.get('/', function(req, res){
	res.send('Hello World');
});

*/
app.listen(process.env.PORT || 3000, function() {
  console.log("Express server listening on port " + app.get("port"));
});
