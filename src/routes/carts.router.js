const {Router} = require('express');
const { createCarts, bdgetCartId, deleteProductToCart, emptyToCart, updateToQuantityProduct, updateToProductsToCart, pucharse, addProductsToCart, getAllCart } = require('../controller/carts.controller');
const { userPermission } = require('../utils/middleware/isUser');
const passportCustom = require('../utils/passportCall');
const { JWT_STRATEGY } = require('../config/config');


const router =  Router();


router.post('/', passportCustom(JWT_STRATEGY),userPermission,createCarts)
router.post('/:cid', passportCustom(JWT_STRATEGY),userPermission,addProductsToCart)
router.get('/:cid', bdgetCartId)
router.get ("/", getAllCart)
router.delete('/:cid/product/:pid', deleteProductToCart);
router.delete('/:cid', emptyToCart);
router.put('/:cid/product/:pid', updateToQuantityProduct);
router.put('/:cid', updateToProductsToCart);
router.post('/:cid/purchase',passportCustom(JWT_STRATEGY), pucharse);

module.exports = router;

