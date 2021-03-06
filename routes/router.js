/**
 * Main app routes and CRUD operations
 */
var Inventory = require('../models/inventory');

module.exports = function (app) {
    app.get('/inventory/:id?', function (req, res, next) {
        if (req.params.id) {
            Inventory.getInventoryById(req.params.id, function (err, rows) {
                if (err) {
                    next(err);
                } else {
                    res.json(rows);
                }
            });
        } else {
            Inventory.listInventory(function (err, rows) {
                if (err) {
                    next(err);
                } else {
                    res.json(rows);
                }
            });
        }
    });
    app.post('/inventory/', function (req, res, next) {
        Inventory.createInventory(req.body, function (err, result) {
            if (err) {
                next(err);
            } else {
                res.json(result.insertId);
            }
        });
    });

    app.delete('/inventory/:id', function (req, res, next) {
        Inventory.deleteInventoryById(req.params.id, function (err) {
            if (err) {
                next(err);
            } else {
                res.sendStatus(200);
            }
        });
    });

    app.put('/inventory/:id', function (req, res, next) {
        Inventory.updateInventoryById(req.params.id, req.body, function (err) {
            if (err) {
                next(err);
            } else {
                res.json('SUCCESS');
            }
        });
    });
};


