var express = require('express');
var router = express.Router();


var product_controller = require('../controllers/product');

router.put('/:id/update', product_controller.product_update);
router.get('/:id', product_controller.product_details);
router.get('/test', product_controller.test);
router.post('/create', product_controller.product_create);
router.delete('/:id/delete', product_controller.product_delete);

module.exports = router;