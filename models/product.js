const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const productsSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    img: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    qty: {
        type: Number,
        require: true
    },
})
const Product = mongoose.model("Product", productsSchema)
module.exports = Product