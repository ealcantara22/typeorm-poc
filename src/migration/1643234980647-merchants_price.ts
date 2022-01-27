import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class merchantsPrice1643234980647 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns("merchants", [
      new TableColumn({name: "price", type: "numeric"}),
      new TableColumn({name: "sale_price", type: "numeric", isNullable: true})
    ])
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("merchants", "price");
    await queryRunner.dropColumn("merchants", "sale_price");
  }

}
