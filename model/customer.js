const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
     city:String,
     area:String,
     pincode:Number,
})

const customerEmpSchema = new mongoose.Schema({
    empno:String,
    company:String,
    salary:Number,
    address:[addressSchema]
})

const customerSchema = new mongoose.Schema({
    customerName:{
        type:String,
        required:true,
    },
    customerAge:{
        type:Number,
        required:true,
    },
    hobbies:{
        type:[String],
        required:true,
    },
    membership:{
        type:Boolean,
        required:true
    },
    customerOutfitSize:{
        type:[Number],
        required:true,
    },
    customerEmpDetail:{
        type:[customerEmpSchema],
        required:true,
    }
},
{
    timestamps:true
}
);

module.exports = mongoose.model('Customer', customerSchema);