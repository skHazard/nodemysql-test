/**
 * Application entry point
 */
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var routes = require('./routes/router');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res) {
    res.render('index');
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'views')));
routes(app);

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    if (err) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    }
});


app.listen(3000, function () {
    console.log('May the Node be with you on port 3000! :)')
});
