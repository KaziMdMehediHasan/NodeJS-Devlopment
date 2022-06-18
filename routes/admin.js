const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/path');

const products = [];
// get request
router.get('/addProduct', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'addProduct.html'));
});

router.post('/addProduct', (req, res, next) => {
    products.push({ title: req.body.title })
    console.log(req.body);
    res.redirect('/shop');
})

// module.exports = { router, products };
exports.routes = router;
exports.products = products;