var express = require('express');
var router = express.Router();
var ProductModel = require('../models/Product.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/add-product', function(req, res, next) {
  res.render('add-product', { title: 'Add Product' });

});
router.post('/add-product-process', function(req, res, next) {
  var productData = {
    pname : req.body.name,
    pprice : req.body.price,
    pdetails : req.body.details
  }
  var mydata = ProductModel(productData);
  mydata.save().then(() => {
    res.send("Record Added Successfully");
  }).catch((err) => {
    res.send(err);
  });
});

router.get('/display-product', function(req, res, next){
  ProductModel.find().then((data) => {
    res.render('display-product', {title: 'Display Product', mydata : data});
  }).catch((err) => {console.log(err)});
});

router.get('/display-product-api', function(req, res, next){
  ProductModel.find().then((data) => {
    res.json(data);
  }).catch((err) => {console.log(err)});
});

module.exports = router;
