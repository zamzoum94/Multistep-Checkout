const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:3000');

let orderSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name  : String,
    email : String,
    password: String,
    adress : String,
    city : String,
    zip_code : String,
    phone_number : String,
    credit_card : String,
    expircy_date : String,
    zip_code : String
});

module.exports = mongoose.model('Order', orderSchema);