


const express = require('express')
const connect = require('./config/connectDB')
require('dotenv').config({ path: './config/.env' })
const user = require('./routes/user')
const doctor = require('./routes/doctor')
const app = express();


app.use(express.json());
app.use('/user',user)
app.use('/doctor',doctor)
connect();
const PORT = process.env.PORT || 5000;
app.listen(PORT,err=>err?console.log(error):console.log('server is runing on port 5000 '));