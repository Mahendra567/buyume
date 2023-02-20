const mongoose  = require("mongoose");
const Schema = mongoose.Schema;

const invertorySchema = new Schema({
        productId:{type : Number},
        quantity:{type : Number},
});

const Inventory = mongoose.model('Inventory',invertorySchema);

module.exports = Inventory;

