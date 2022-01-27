import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class init1643229256145 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.createTable(new Table({
      name: 'products',
      columns: [
        {
          name: "id",
          type: "serial",
          isPrimary: true
        },
        {
          name: "name",
          type: "text",
        },
        {
          name: "image_url",
          type: "text",
        },
        {
          name: 'created_at',
          type: 'timestamptz',
          default: 'now()'
        },
        {
          name: 'updated_at',
          type: 'timestamptz',
          default: 'now()'
        }
      ]
    }), true);

    await queryRunner.createTable(new Table({
      name: 'affiliate_retailers',
      columns: [
        {
          name: "id",
          type: "serial",
          isPrimary: true
        },
        {
          name: "affiliate_name",
          type: "varchar",
        },
        {
          name: "retailer_name",
          type: "varchar",
        },
        {
          name: 'created_at',
          type: 'timestamptz',
          default: 'now()'
        },
        {
          name: 'updated_at',
          type: 'timestamptz',
          default: 'now()'
        }
      ]
    }), true);

    await queryRunner.createTable(new Table({
      name: 'merchants',
      columns: [
        {
          name: "id",
          type: "serial",
          isPrimary: true
        },
        {
          name: "product_id",
          type: "int4"
        },
        {
          name: "affiliate_retailer_id",
          type: "int4",
          isNullable: true
        },
        {
          name: "buy_url",
          type: "text",
        },
        {
          name: 'created_at',
          type: 'timestamptz',
          default: 'now()'
        },
        {
          name: 'updated_at',
          type: 'timestamptz',
          default: 'now()'
        }
      ]
    }), true);

    await queryRunner.createForeignKey("merchants", new TableForeignKey({
      columnNames: ["product_id"],
      referencedColumnNames: ["id"],
      referencedTableName: "products",
      onDelete: "CASCADE",
      name: "merchants_product_FK"
    }));

    await queryRunner.createForeignKey("merchants", new TableForeignKey({
      columnNames: ["affiliate_retailer_id"],
      referencedColumnNames: ["id"],
      referencedTableName: "affiliate_retailers",
      onDelete: "SET NULL",
      name: "merchants_affiliate_retailer_FK"
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('merchants', true, true);
    await queryRunner.dropTable('affiliate_retailers', true);
    await queryRunner.dropTable('products', true);
  }

}
