
const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

require('../config/passportConfig');
require('passport-local').Strategy;

const User = mongoose.model('User');

module.exports.register = (req, res, next) => {
    var user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
}

module.exports.authenticate = (req, res,next) => {
    
    passport.authenticate('local', (err, user, info) => {    
        // error from passport middleware
        if (err) {
            console.log("error",err)
            return res.status(400).send(err);
        }
        // registered user
        else if (user) 
            return res.status(200).json({ "token": user.generateJwt() });
        
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res, next);
}

module.exports.userProfile = (req, res) =>{
    User.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json({ status: true, user : _.pick(user,['fullName','email']) });
        }
    );
}