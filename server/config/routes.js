var mongoose = require('mongoose');
var product = mongoose.model('Product');
mongoose.Promise = global.Promise;
var path = require('path');
var controller = require('../controllers/controller.js');

module.exports = function(app) {
    app.post('/create', function(req, res) {
        controller.create(req, res);
    })

    app.get('/getall', function(req, res) {
        controller.getAll(req, res);
    })

    app.get('/product/:id', function(req, res) {
        controller.getOne(req, res);
    })

    app.delete('/delete/:id', function(req, res) {
        controller.delete(req, res)
    })

    app.put('/update/:id', function(req, res) {
        controller.update(req, res)
    })

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    })
}