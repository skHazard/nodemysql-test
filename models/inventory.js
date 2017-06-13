/**
 * Created by Hazard on 13.06.2017.
 */
var db = require('../app');

var Inventory={

    listInventory:function(callback){

        return db.query("Select * from inventory",callback);

    },
    getTaskById:function(id,callback){

        return db.query("select * from task where Id=?",[id],callback);
    },
    createInventory:function(Inventory,callback){
        return db.query("Insert into inventory values(?,?,?)",[Inventory.Id,Inventory.Name,Inventory.Description],callback);
    },
    deleteInventoryById:function(id,callback){
        return db.query("delete from inventory where Id=?",[id],callback);
    },
    updateInventoryById:function(id,Inventory,callback){
        return db.query("update inventory set Name=?, Description=? where Id=?",[Inventory.Name,Inventory.Description,id],callback);
    }

};
module.exports=Inventory;
