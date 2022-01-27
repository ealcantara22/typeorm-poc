import {Request, Response} from "express";
import {getCustomRepository} from "typeorm";
import {ProductRepository} from "../repository/product.repository";

export const getProducts = async (req: Request, res: Response) => {
  const productRepository = getCustomRepository(ProductRepository);
  const products = await productRepository.find({relations: ['merchants']});
  return res.json(products);
}

export const getProductById = async (req: Request, res: Response) => {
  const productRepository = getCustomRepository(ProductRepository);
  const product = await productRepository.findOne(req.params.id);
  if (product)
    return res.json(product);

  return res.status(404).json({});
}

export const createProduct = async (req: Request, res: Response) => {
  const productRepository = getCustomRepository(ProductRepository);
  const product = productRepository.create({...req.body});

  try {
    const result = await productRepository.save(product);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(400).json({ message: "error creating the product", error});
  }
}

export const updateProduct = async (req: Request, res: Response) => {
  const productRepository = getCustomRepository(ProductRepository);
  const product = await productRepository.findOne(req.params.id);
  if (!product)
    return res.status(404).json({});

  productRepository.merge(product, req.body);
  try {
    const result = await productRepository.save(product);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ message: "error updating the product", error});
  }
}

export const deleteProduct = async (req: Request, res: Response) => {
  const productRepository = getCustomRepository(ProductRepository);
  await productRepository.delete(req.params.id);
  return res.status(204).json({});
}
