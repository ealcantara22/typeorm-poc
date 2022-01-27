import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import {Product} from "./product.entity";
import {AffiliateRetailer} from "./affiliate-retailer.entity";

@Entity('merchants')
export class Merchant {

  @PrimaryGeneratedColumn()
  public readonly id!: number;

  @Column({type: 'number', name: 'product_id'})
  public productId!: number;

  @Column({type: 'number', name: 'affiliate_retailer_id'})
  public affiliateRetailerId!: number;

  @Column({type: 'text', name: 'buy_url'})
  public buyUrl!: string;

  @Column({type: 'decimal'})
  public price!: number;

  @Column({type: 'numeric', name: 'sale_price'})
  public salePrice!: number;

  @CreateDateColumn({name: 'created_at', type: 'timestamptz'})
  public createdAt!: Date;

  @UpdateDateColumn({name: 'updated_at', type: 'timestamptz'})
  public updatedAt!: Date;

  @ManyToOne(() => Product, product => product.merchants)
  @JoinColumn({name: 'product_id', referencedColumnName: 'id'})
  public product: Product;

  @ManyToOne(() => AffiliateRetailer, ar => ar.merchants)
  @JoinColumn({name: 'affiliate_retailer_id', referencedColumnName: 'id'})
  public affiliateRetailer!: AffiliateRetailer;

}
