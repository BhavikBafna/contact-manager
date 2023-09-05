// console.log("Hello server!")

const express= require('express');
const errorHandler = require('./middleware/errorHandler');
const dbConnect = require('./config/dbconnect');
const dotenv= require('dotenv').config();

dbConnect();
const app= express();

const port= process.env.PORT || 5000;
// .use method acts as a middleware

app.use(express.json());
app.use('/api/contacts/', require("./routes/contactRoutes")); 
app.use(errorHandler);


// express.json() is an in-built middleware which is used to parse json type of data
// whenever we need to send data from client to server we need body-parser so that we can parse the stream of data from client
app.listen(port,()=>
{
    console.log(`Server is listening on port ${port}`);
})