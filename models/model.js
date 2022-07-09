const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    },
    gender:{
        require:true,
        type:String,
    },
    email:{
        require:true,
        type:String,
    },
    mobile:{
        require:true,
        type:Number,
    },
    subName:{
        require:true,
        type:String,
    },
    subId:{
        require:true,
        type:Number,
    },
    stdId:{
        require:true,
        type:String,
    },
    marks:{
        require:true,
        type:Number,
    },
    status:{
        require:true,
        type:String,
    },



})

module.exports = mongoose.model('Data', dataSchema)