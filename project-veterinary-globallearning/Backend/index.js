const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const jwt = require('express-jwt');

const Patient = require('./models/patientModel');
const patientRouter = require('./routes/patientRouter')(Patient);

mongoose.connect('mongodb://127.0.0.1:27017/veterinaryApi');

const User = require('./models/userModel');
const userRouter = require('./routes/userRouter')(User);

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// app.all('/api/*', jwt({
//   secret: 'secret',
//   algorithms: ['HS256'],
// }).unless({
//   path: ['/api/users/login'],
// }));

app.use('/api', patientRouter, userRouter);
app.listen(8080);
