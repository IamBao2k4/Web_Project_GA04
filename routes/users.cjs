const express = require('express');
const userController = require('../controllers/userController.cjs');
const productController = require('../controllers/productController.cjs');
const imageController = require('../controllers/imageController.cjs');
const detailController = require('../controllers/detailController.cjs');

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/users', userController.getUsers);
//router.post('/users', insertUser);
router.get('/products', productController.getProducts);
//router.post('/products', productController.insertProduct);
router.get('/images', imageController.getImages);
//router.post('/images', imageController.insertImage);
router.get('/detail/:id', detailController.getDetail);
//router.post('/detail/:id', detailController.insertDetail);

module.exports = router;
