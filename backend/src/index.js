const express = require('express');

const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

mongoose.connect('mongodb+srv://oministack:12345@oministack-jkxww.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

app.use(cors()); //({ origin: 'http://localhost:3000'})) local aonde vai está aplicação
app.use(express.json());
app.use(routes);

app.listen(3333);



