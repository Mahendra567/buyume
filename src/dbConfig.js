const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/testDB',{
    useNewUrlParser:true,
    useUnifiedTopology:true
},()=>{
    console.log("Database connected!")
});