import express from 'express'
import productCtrl from '../controllers/product.controller'
import authCtrl from '../controllers/auth.controller'
import shopCtrl from '../controllers/shop.controller'

const router = express.Router()

router.route('/api/products/by/:shipId')
    .post(authCtrl.requireSignin, shopCtrl.isOwner, productCtrl.create)

router.route('/api/products/by/:shopId')
    .get(productCtrl.listByShop)

router.route('/api/products/latest')
    .get(productCtrl.listLatest)

router.route('/api/products/related/:productId')
    .get(productCtrl.listRelated)

router.route('/api/products/:productId')
    .get(productCtrl.read)

router.route('/api/product/:shopId/:productId')
    .put(authCtrl.requireSignin, shopCtrl.isOwner, productCtrl.update)
    .delete(authCtrl.requireSignin, shopCtrl.isOwner, productCtrl.remove)

router.route('/api/products/categories')
    .get(productCtrl.listCategories)

router.route('/api/product/image/:productId')
    .get(productCtrl.photo, productCtrl.defaultPhoto)

router.route('/api/product/defaulphoto')
    .get(productCtrl.defaultPhoto)

router.route('/api/products')
    .get(productCtrl.list)

router.param('shopId', shopCtrl.shopByID)
router.param('productId', productCtrl.productByID)

export default router