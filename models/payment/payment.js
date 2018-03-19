const _ = require('lodash');
const mongoose = require('mongoose');
const validate = require('mongoose-validator');
const Schema = mongoose.Schema;

let payment = Schema({

    time: {
        type: String,
        validate: validate({
            validator: 'isISO8601',
            message: 'Please enter a valid date'
        }),
        required: [true, "time is required"]
    },
    paymentId:{
        type:String
    },
    contractId: {
        type: String
    },
    isDeleted: {
        type: Boolean
    },
    value : {
        type:Number
    }
    

})

let paymentModel = mongoose.model('payment', payment);
module.exports = paymentModel
