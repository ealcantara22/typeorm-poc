import {EntityRepository, Repository} from "typeorm";
import {Product} from "../entity/product.entity";
import {Service} from "typedi";

@Service()
@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {}
