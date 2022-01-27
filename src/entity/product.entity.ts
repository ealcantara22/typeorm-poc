import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {Merchant} from "./merchant.entity";
import {Field, ObjectType} from "type-graphql";

@Entity('products')
@ObjectType()
export class Product {
  @Field((_type) => Number)
  @PrimaryGeneratedColumn()
  public readonly id!: number;

  @Field()
  @Column({type: 'text'})
  public name!: string;

  @Field()
  @Column({type: 'text', name: 'image_url'})
  public imageUrl!: string;

  @Field()
  @CreateDateColumn({ name: 'created_at', type: 'timestamptz'})
  public createdAt!: Date;

  @Field()
  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz'})
  public updatedAt!: Date;

  @OneToMany(() => Merchant, merchant => merchant.product)
  public merchants: Merchant[];
}
