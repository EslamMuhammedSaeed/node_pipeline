const express = require('express');
// const { PrismaClient } = require('@prisma/client')
const mongoose = require('mongoose');
const app = express();
const port = 3000;
// const prisma = new PrismaClient();

mongoose.connect('mongodb://admin:password@192.168.80.4:27017').then(console.log('connected')).catch((e) => {
    console.log(e);
});

app.get('/', (req, res) => {
    console.log("here57755");
    res.send('Hello World 233354353!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});