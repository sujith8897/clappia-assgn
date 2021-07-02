const mongoose = require('mongoose');

mongoose.Promis = global.Promise;

mongoose.connect('mongodb://127.0.0.1/employeemanager', {useNewUrlParser: true , useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log("Database Connected"))
    .catch(() => console.log(err));

module.exports = mongoose;