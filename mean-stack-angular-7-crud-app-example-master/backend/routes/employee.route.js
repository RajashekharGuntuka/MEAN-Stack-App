const express = require('express');
const app = express();
const employeeRoute = express.Router();

// Employee model
let Employee = require('../models/Employee');
var User = require('../models/user.model');
const ctrlUser = require('../controllers/user.controller');
const jwtHelper = require('../config/jwtHelper');

employeeRoute.post('/register', ctrlUser.register);
employeeRoute.post('/authenticate', ctrlUser.authenticate);
employeeRoute.get('/employees-list',jwtHelper.verifyJwtToken, ctrlUser.userProfile);

// Add Employee
employeeRoute.route('/create').post((req, res, next) => {
  Employee.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Employees
employeeRoute.route('/').get((req, res) => {
  Employee.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single employee
employeeRoute.route('/read/:id').get((req, res) => {
  Employee.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update employee
employeeRoute.route('/update/:id').put((req, res, next) => {
  Employee.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);

    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete employee
employeeRoute.route('/delete/:id').delete((req, res, next) => {
  Employee.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = employeeRoute;