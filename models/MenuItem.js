const mongoose = require('mongoose')
require('dotenv').config();


const menuItemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:['Sweet','Spicy','Sour'],
        required:true
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingredients:{
        type:[String],
        default:[]
    },
    num_sales:{
        type:Number,
        required:true,
        default:0
    }

})



const MenuItem = mongoose.model('MenuItem',menuItemSchema)

module.exports = MenuItem;