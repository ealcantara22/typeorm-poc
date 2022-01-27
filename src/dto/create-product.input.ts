import {Product} from "../entity/product.entity";
import {Field, InputType} from "type-graphql";

@InputType()
export class CreateProductInput implements Partial<Product> {

  @Field()
  public name!: string;
  
  @Field()
  public imageUrl!: string;

}
