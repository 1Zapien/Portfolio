
var express = require('express');
var http = require('http');
var path = require("path");
var exphbs  = require('express-handlebars');




var home = require("./routes/home");
var about = require("./routes/about");
var projects = require("./routes/projects");
var favicon = require('serve-favicon');


var app = express();


//environments
app.set("port", process.env.PORT || 3000);



app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname,'public','img','fav.ico')));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



app.get('/', home.view);
app.get('/about', about.view);
app.get("/:project", projects.view);




http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
