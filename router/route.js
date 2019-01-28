var router = require('express').Router();
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var data = require('../models/data')
router.use(bodyParser.json())
var url = 'mongodb://localhost:27017/dataCPU'
var os = require('os')

var namaCPU = os.hostname();
var tipe = os.type();
var platform = os.platform();
var rilis = os.release();
var ramSisa = os.freemem();
var ramTotal = os.totalmem();

router.post('/data', (req, res) => {
    mongoose.connect(url, () => {
        console.log('Connect to MongoDb')
        new data({

            namacpu: namaCPU,
            tipe: tipe,
            platform: platform,
            rilis: rilis,
            ramSisa: ramSisa,
            ramTotal: ramTotal


        }).save().then((hasil) => {
            console.log(hasil)
            res.send(hasil)
            mongoose.disconnect()
        })
    })
})



router.get('/data', (req, res) => {
    mongoose.connect(url, () => {
        console.log('Terhubung ke MongoDB!')
        data.find((error, hasil) => {
            console.log(hasil)
            res.send(hasil)
        })
    })
})

module.exports = router
