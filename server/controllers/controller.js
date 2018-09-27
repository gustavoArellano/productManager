var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = {

    create: function(req, res) {
        var product = new Product({name: req.body.name, quantity: req.body.quantity, price: req.body.price});
        product.save(function(err, data) {
        if (err) {
            console.log('error in controller create')
            res.json({ message: false, inputError: err });
        } else {
            res.json({ message: true, data });
            }
        })
    },

    getAll: function(req, res) {
        Product.find({}, function(err, data) {
            if (err) {
                res.json({ message: false, inputError: err });
            } else {
                res.json({ message: true, data });
            }
        })
    },

    getOne: function(req, res) {
        Product.findOne({_id: req.params.id}, function(err, data) {
            if (err) {
                res.json({ message: false, inputError: err });
            } else {
                res.json({ message: true, data });
            }
        })
    },

    delete: function(req, res) {
        Product.remove({_id: req.params.id}, function(err, data) {
            if(err) {
                console.log("This is an error in delete Controller", err);
                res.json({message: false, inputError: err});
            } else {
                console.log("You've successfully removed the product");
                res.json({message: true, data})
            }
        })
    },

    update: function(req, res) {
        Product.findOneAndUpdate({_id: req.params.id}, {$set: req.body}, {runValidators: true, context: 'query'}, function(err, data) {
            if(err) {
                console.log("This is an error in update Controller", err);
                res.json({message: false, data, inputError: err});
            } else {
                console.log("You've successfully updated the product");
                res.json({message: true, data})
            }
        })
    }
}