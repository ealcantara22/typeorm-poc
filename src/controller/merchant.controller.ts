import {Request, Response} from "express";
import {getCustomRepository} from "typeorm";
import {MerchantRepository} from "../repository/merchant.repository";

export const getMerchants = async (req: Request, res: Response) => {
  const merchantRepository = getCustomRepository(MerchantRepository);
  const merchants = await merchantRepository.find();
  return res.json(merchants);
}

export const getMerchantById = async (req: Request, res: Response) => {
  const merchantRepository = getCustomRepository(MerchantRepository);
  const merchant = await merchantRepository.findOne(req.params.id, { relations: ['product', 'affiliateRetailer']});
  if (merchant)
    return res.json(merchant);

  return res.status(404).json({});
}

export const createMerchant = async (req: Request, res: Response) => {
  const merchantRepository = getCustomRepository(MerchantRepository);
  const merchant = merchantRepository.create({...req.body});

  try {
    const result = await merchantRepository.save(merchant);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(400).json({ message: "error creating the merchant", error});
  }
}

export const updateMerchant = async (req: Request, res: Response) => {
  const merchantRepository = getCustomRepository(MerchantRepository);
  const merchant = await merchantRepository.findOne(req.params.id);
  if (!merchant)
    return res.status(404).json({});

  merchantRepository.merge(merchant, req.body);
  try {
    const result = await merchantRepository.save(merchant);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ message: "error updating the merchant", error});
  }
}

export const deleteMerchant = async (req: Request, res: Response) => {
  const merchantRepository = getCustomRepository(MerchantRepository);
  await merchantRepository.delete(req.params.id);
  return res.status(204).json({});
}
