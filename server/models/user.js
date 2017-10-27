const mongoose = require('mongoose');
const validator = require('validator');


var User = mongoose.model('User', {
    email:{
        type: String,
        required: true,
        trim: true,
        minLength: 1,
        unique: true,
        validate: {
            validator: function(value){
                return validator.isEmail(value);
            },
            message: '{VALUE} is not a valid email.'
        }
    },
    password: {
        type: String,
        require: true,
        minLength: 6,
    },
    tokens: [{
        acesss: {
            type: String,
            required: true
        },
        token: {
            type: String, 
            require: true
        }
    }]
});
module.exports = {User};