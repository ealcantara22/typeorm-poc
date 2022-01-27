import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {Merchant} from "./merchant.entity";

@Entity('affiliate_retailers')
export class AffiliateRetailer {

  @PrimaryGeneratedColumn()
  public readonly id!: number;

  @Column({type: 'varchar', name: 'affiliate_name'})
  public affiliateName!: string;

  @Column({type: 'varchar', name: 'retailer_name'})
  public retailerName!: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz'})
  public createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz'})
  public updatedAt!: Date;

  @OneToMany(() => Merchant, merchant => merchant.product)
  public merchants: Merchant[];
}
