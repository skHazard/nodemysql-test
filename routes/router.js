/**
 * Created by Hazard on 13.06.2017.
 */

var express = require('express');
var router = express.Router();
var Inventory = require('../models/Inventory');

router.get('/:id?', function (req, res, next) {

    if (req.params.id) {

        Inventory.getInventoryById(req.params.id, function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    else {

        Inventory.listInventory(function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }

        });
    }
});
router.post('/', function (req, res, next) {

    Inventory.createInventory(req.body, function (err, count) {

        // TODO: The id for the created record should be returned up-on-success.

        if (err) {
            res.json(err);
        }
        else {
            res.json(req.body); //or return count for 1
        }
    });
});
router.delete('/:id', function (req, res, next) {

    Inventory.deleteInventoryById(req.params.id, function (err, count) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(count);
        }

    });
});
router.put('/:id', function (req, res, next) {

    Inventory.updateInventoryById(req.params.id, req.body, function (err, rows) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports = router;


