const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.get('/', (req, res)=>{
    res.status(200);
});

app.post('/order', (req, res)=>{
    console.log('order have been made');
    console.log(req.body)
    res.status(201).json({
        body : req.body
    });
})


const PORT = 3000;

app.listen(PORT);

