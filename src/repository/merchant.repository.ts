import {EntityRepository, Repository} from "typeorm";
import {Merchant} from "../entity/merchant.entity";


@EntityRepository(Merchant)
export class MerchantRepository extends Repository<Merchant> {}
