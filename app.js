const express = require('express');
const exphbs  = require('express-handlebars');
const path = require("path");

const app = express();


app.use(express.static(path.join(__dirname, "public")));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



app.get('/', function (req, res) {
    res.render('home');
});
app.get('/about', function (req, res) {
    res.render('about');
});




/*app.get('/', function(req, res){
	res.send('Hello World');
});

*/

app.listen(3000, function(){
	console.log('Server started at port 3000');
});