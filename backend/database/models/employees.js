const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: String,
    salary: Number,
    address: String,
    team: String,
    gender: String,
    
});



const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;

