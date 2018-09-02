
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


var home = require("./routes/home");
var about = require("./routes/about");



app.get('/', home.view);
app.get('/about', about.view);

app.set("port", process.env.PORT || 3000);



/*app.get('/', function(req, res){
	res.send('Hello World');
});

*/
app.listen(process.env.PORT || 3000, function() {
  console.log("Express server listening on port " + app.get("port"));
});
