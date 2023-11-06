const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName:{
        type: String,
        required: [true, 'Please enter your first name']
    },

    lastName:{
        type: String,
        required: [true, 'Please enter your last name']
    },


    email:{
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
    },

    password:{
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'Your password must be at least 8 characters long']
    }
}, {
    timestamps: true
});


//encrypt password before saving
userSchema.pre('save', async function(next){
    if(!this.isModified('password'))
        next();
    try{
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch(error){
        next(error);
    }
});


//compare passwords
userSchema.methods.comparePasswords = async function(password){
    try{
        return await bcrypt.compare(password, this.password);
    } catch(error){
        throw new Error(error);
    }
};

const User = mongoose.model('User', userSchema);
module.exports = User;