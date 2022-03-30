const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('express-jwt');


const Patient = require('./models/patientModel');
const patientRouter = require('./routes/patientRouter')(Patient);

const User = require('./models/userModel');
const userRouter = require('./routes/userRouter')(User);

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/veterinaryApi');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.all('/veterinaryApi/*', jwt({secret: 'secret', algorithms: ['HS256']}).unless({path: ['/veterinaryApi/users/login']}));
app.use('/veterinaryApi', patientRouter, userRouter);
app.listen(8080);
