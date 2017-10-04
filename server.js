var express = require('express');
var morgan = require('morgan');
var path = require('path');
//var counter = 0;
// app.get('/counter', function (req, res){s
// counter = counter+1;
// res.send(counter.toString());



var app = express();
// app.use(morgan('combined'));







// var config  = {
// HOST    :'sdhrsingh271',
// USER:'sdhrsingh271',
// DATABASE:'db.imad.hasura.io',
// PORT : "5432",
// PASSWORD: process.env.DB_PASWORD
// };

// var pool =new Pool(config);
// app.get('/test-db',function(req,res)
//     {

//         pool.query('SELECT *FROM test' ,function(err,result){

//          if(err){
//              res.status(500).send(err.toString());

//          }   
//          else{
//              res.send(JSON.stringify(result));
//      }
//     });
// });



app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'indexx.html'));
});


app.get('/main.css', function(req, res) {
    res.sendFile(path.join(__dirname, 'main.css'));
});


app.get('/article-one', function(req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article-two', function(req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function(req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function(req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});




app.get('/ui/madi.png', function(req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function(req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/indexx.html', function(req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'indexx.html'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 8080;
app.listen(port, function() {
    console.log(`All Done Open ${port}! to view `);
});