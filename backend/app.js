const express = require('express');
const app = express();
const mongoose = require('./database/mongoose');
const Employee = require('./database/models/employees');
const Counter = require('./database/models/counters');

app.use(express.json());


//CORS(cross origin req security) code to terminate req from local:4200 and to only take local:3000
app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested_With, Content-Type, Accept");
    next();
});

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};



 app.get('/employees', (req,res) =>{

    try{

        let {page, size} = req.query;
        if(!page){
            page = 1;
        }
        if(!size){
            size = 5;
        }

        const limit = parseInt(size);
        const skip = (page - 1) * size;

        Employee.find({}, {}, {limit: limit, skip: skip})
        .then(lists => res.send(lists))
        .catch((error) => console.log(error));

    }catch{
        console.log(error.message);
    }
});

app.post('/employees', (req,res) =>{
    
   (new Employee({
        name: req.body.employee.name,
        salary: req.body.employee.salary,
        gender: req.body.employee.gender,
        team: req.body.employee.team,
        address: req.body.employee.address
    }))
        .save()
        .then((lists) =>  res.send(lists) )
        .catch((error) => console.log(error));
});

app.get('/employees/:empid', (req,res) =>{
    Employee.find({ '_id': req.params.empid })
        .then((lists) => res.send(lists))
        .catch((error) => console.log(error));
});


app.get('/employees/search/:empname', (req,res) =>{
    //console.log("app", req.params.empname);
    const regex = new RegExp(escapeRegex(req.params.empname),'i');
    Employee.find({ 'name': regex })
        .then((lists) => res.send(lists))
        .catch((error) => console.log(error));
});

app.patch('/employees/:empid', (req,res) =>{
    Employee.findOneAndUpdate({ '_id': req.params.empid }, {$set: req.body})
        .then((lists) => res.send(lists))
        .catch((error) => console.log(error));
});

app.delete('/employees/:empid', (req,res) =>{
    Employee.findByIdAndDelete(req.params.empid)
        .then((lists) => res.send(lists))
        .catch((error) => console.log(error));
});


app.listen(3000, ()=>{
    console.log("Server connected on port 3000");
});