var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser')
var route = require('./router/route');

var app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(route)

app.get('/', (req, res) => {
    res.send('Express to Mongoose Succes')
})

var port = 4444
app.listen(port, () => {
    console.log('Server aktif di ' + port)
});

