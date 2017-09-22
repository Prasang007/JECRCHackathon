const express = require('express');
const app = express();
const path = require('path');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.use('/', express.static(path.join(__dirname, 'assets')))


app.listen(8080, () => {
    console.log('server started at port: 8080');
});
