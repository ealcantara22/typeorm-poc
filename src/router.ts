import express from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "./controller/product.controller";
import {
  createMerchant,
  deleteMerchant,
  getMerchantById,
  getMerchants,
  updateMerchant
} from "./controller/merchant.controller";


export const setRouter = (app: express.Application) => {
  const router = express.Router(),
    productsRouter = express.Router(),
    merchantsRouter = express.Router();

  productsRouter.route('/').get(getProducts).post(createProduct);
  productsRouter.route('/:id').get(getProductById).put(updateProduct).delete(deleteProduct);

  merchantsRouter.route('/').get(getMerchants).post(createMerchant);
  merchantsRouter.route('/:id').get(getMerchantById).put(updateMerchant).delete(deleteMerchant);

  router.use('/products', productsRouter);
  router.use('/merchants', merchantsRouter);

  app.use(router);
}
