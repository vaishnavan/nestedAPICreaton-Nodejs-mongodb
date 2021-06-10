const express = require('express');
const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://restapi:Vaish@123@cluster0.qqp1j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const port = 5000 || process.env.PORT;
const app = express();

//middleware
app.use(express.json());

//imporing router
app.use('/customer/api', require('./controller/customerRoute'));

//initial message
app.get('/', (req, res) => {
    res.json({APIMESSAGE:"Nested RestAPI Creation"})
})

app.listen((port), () => {
    console.log(`server up and running on port ${port}`)
})

mongoose.connect((mongoURI), {useNewUrlParser:true, useUnifiedTopology:true}, (err) => {
    if(!err){
        console.log('Database connected successfully');
    }else{
        console.log('mongoDB ERR'+err)
    }
})

