import mongoose from 'mongoose';
import defaultAttribute from './defaultAttribute.js';

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    },
    isAdmin : {
        type : Boolean,
        default : false,
        required : true
    },
    ...defaultAttribute
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;