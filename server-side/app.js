const express = require('express')
const app = express();
const mongoose = require('mongoose')
require('dotenv/config');
const bodyParser = require('body-parser');

app.use(bodyParser.json())


const postsRoute = require('./posts');

app.use('/posts', postsRoute)

app.get('/', (req, res) =>{
    res.send('We are on home');
});


//DB connection 
mongoose.connect(
    process.env.DB_Connection,
{useNewUrlParser: true}, () => console.log('connected to mongodb'))

app.listen(3000);


