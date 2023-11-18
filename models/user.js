const mongoose = require('mongoose');

const schema = mongoose.Schema;

let userdetailsSchema = new schema({
    name:{
        type:String,
        required: true
    },
    productid:{
        type:String,
        required: true
    },
    category:{
        type:String,
        required: true
    },
    price:{
        type:String,
        required: true
    },
    discount:{
        type:String,
        required: true
    },
    bonus:{
        type:String,
        required: true
    },
    billableprice:{
        type:String,
        required: true
    },
   
})

module.exports = mongoose.model("UserDetails",userdetailsSchema);
