/**
 * Establishing MySQL connection and making DB queries
 */
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'fortest'
});

connection.connect(function (err) {
    if (!err) {
        console.log("Database connected successfully... \n\n");
    } else {
        console.log("Error connecting to database ... \n\n");
    }
});


var Inventory = {

    listInventory: function (callback) {
        return connection.query("select * from inventory", callback);
    },
    getInventoryById: function (id, callback) {
        return connection.query("select * from inventory where Id=?", [id], callback);
    },
    createInventory: function (Inventory, callback) {
        return connection.query("insert into inventory SET ?", Inventory, callback);
    },
    deleteInventoryById: function (id, callback) {
        return connection.query("delete from inventory where Id=?", [id], callback);
    },
    updateInventoryById: function (id, Inventory, callback) {
        return connection.query("update inventory set Name=?, Description=? where Id=?", [Inventory.Name, Inventory.Description, id], callback);
    }
};

module.exports = Inventory;

