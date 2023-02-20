const express = require("express");
const app = express()
const port=5000;
const invertoryModel = require('./inventory-schema');
app.use(express.json());
require('./dbConfig');

/**
 * API to add ans subtract product quantity.
 */
app.post('/addInventory',async (req,res)=>{
   try {
    let data = req.body;
    for(let i=0;i<data.length;i++) {
        if(data[i].operation=='add') {
            const inventory = new invertoryModel({productId:data[i].productId,quantity:data[i].quantity});
            await inventory.save();
          } else  {
            let product = await invertoryModel.findOne({productId:data[i].productId});
            let currentQty = product.quantity - data[i].quantity;
            await invertoryModel.updateOne({productId : data[i].productId},{$set:{quantity : currentQty }})
          }
    }
      res.send("Added !")
   } catch (error) {
     console.log(error);
   }

})

/** Server  */
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})