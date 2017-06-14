/**
 * Created by Hazard on 13.06.2017.
 */
var Inventory = require('../models/inventory');



module.exports = function (app) {

    app.get('/:id?', function (req, res, next) {

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
    app.post('/', function (req, res, next) {

        Inventory.createInventory(req.body, function (err, result) {

            if (err) {
                next(err);
            }
            else {
                res.json(result.insertId);
            }
        });
    });
    app.delete('/:id', function (req, res, next) {

        Inventory.deleteInventoryById(req.params.id, function (err) {

            if (err) {
                next(err);
            }
            else {
                res.sendStatus(200);
            }

        });
    });
    app.put('/:id', function (req, res, next) {

        Inventory.updateInventoryById(req.params.id, req.body, function (err) {

            if (err) {
                next(err);
            }
            else {
                res.sendStatus(200);
            }
        });
    });
};


