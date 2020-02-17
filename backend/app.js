const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const stuffRouter =require('./routes/stuff');
const userRouter =require('./routes/user-router');


const uri = "mongodb+srv://expecto-user:UAR3bTCGvzzMcp4T@expecto-cluster-quy3e.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true})
.then(()=> {console.log('Connection to mongodb Ok')})
.catch((error)=> {console.log('connextion echoué',error)})


//middleweare
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use(bodyParser.json());

app.use('/api/stuff', stuffRouter);
app.use('/api/auth', userRouter);


module.exports  = app;