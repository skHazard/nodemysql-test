/**
 * Created by Hazard on 13.06.2017.
 */
var express = require('express');
var app = express();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1234',
    database : 'fortest'
});

connection.connect(function(err){
    if(!err) {
        console.log("Database connected successfully... \n\n");
    } else {
        console.log("Error connecting to database ... \n\n");
    }
});


app.get("/",function(req,res){
    res.send('Testing app is running!');

    connection.query('SELECT * from INVENTORY', function(err, rows, fields) {
        connection.end();
        if (!err)
            console.log('The solution is: ', rows);
        else
            console.log('Error while performing Query.');
    });
});

app.listen(3000, function () {
    console.log('May the Node be with you on port 3000! :)')
});



