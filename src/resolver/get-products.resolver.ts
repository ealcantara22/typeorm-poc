import {Query, Resolver} from "type-graphql";
import {Product} from "../entity/product.entity";
import { Service } from "typedi";
import {getCustomRepository} from "typeorm";
import {ProductRepository} from "../repository/product.repository";

@Service()
@Resolver((_type) => Product)
export class GQLGetProductsResolver {

  @Query((_type) => [Product])
  public async getProducts(): Promise<Product[]> {
    const productRepository = getCustomRepository(ProductRepository);
    return await productRepository.find();
  }
}
