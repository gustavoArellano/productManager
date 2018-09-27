var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/commerceManager');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost/commerceManager");
autoIncrement.initialize(connection);

var ProductSchema = new mongoose.Schema({
    _id: Number,
    name: {type: String, require: [true, "Product name is required!(backend)"], minlength: [3, "Must be at least 3 characters!(backend)"]},
    quantity: {type: Number, require: [true, "Please enter product quanity!(backend)"], min: [0, "Invalid quantity!(backend)"]},
    price: {type: Number, require: [true, "Please enter product price!(backend)"], min: [0, "Invalid price!(backend)"]}
}, {timestamps: true});
mongoose.model('Product', ProductSchema);

// ProductSchema.plugin(autoIncrement.plugin, 'Product');

ProductSchema.plugin(autoIncrement.plugin, {
    model: 'Product',
    field: '_id',
    startAt: 100,
    incrementBy: 4
});



// mongoose.connect('mongodb://localhost/commerceManager');

