const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const Order = require('./db/order');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.get('/', (req, res)=>{
    res.status(200);
});

app.post('/order', (req, res)=>{
   let newOrder = new Order({
    _id : new mongoose.Types.ObjectId(),
    name  : req.body.user.name,
    email : req.body.user.email,
    password: req.body.user.pass,
    adress : req.body.user.adress,
    city : req.body.user.city,
    zip_code : req.body.user.zipCode,
    phone_number : req.body.user.phoneNumber,
    credit_card : req.body.user.creditCard,
    expircy_date : req.body.user.expircyDate,
    zip_code : req.body.user.zipCode
   }); 

   /*
    newOrder.save()
    .then(err=>{
        res.status(201)
    })
    .catch(
        res.status(500)
    )
   */
});


const PORT = 3000;

app.listen(PORT);

