var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var dataSchema = new Schema({
    namacpu: String,
    tipe: String,
    platform: String,
    rilis: String,
    ramSisa: String,
    ramTotal: String,
});
var data = mongoose.model('data', dataSchema);
module.exports = data;