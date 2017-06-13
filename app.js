/**
 * Created by Hazard on 13.06.2017.
 */
var routes = require('./routes/router');
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

routes(app);

app.use(function (err, req, res) {
    console.log(err);
    res.sendStatus(500);
});


app.listen(3000, function () {
    console.log('May the Node be with you on port 3000! :)')
});
