import mongoose from 'mongoose';
import defaultAttribute from './defaultAttribute.js';

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    image : {
        type : String,
        required : true
    },
    brand : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    countInStock : {
        type : Number,
        required : true
    },
    rating : {
        type : Number,
        required : true
    },
    numReviews : {
        type : Number,
        required : true
    },
    ...defaultAttribute
}, {
    timestamps : true
});

const Product = mongoose.model('Product', productSchema);

export default Product;