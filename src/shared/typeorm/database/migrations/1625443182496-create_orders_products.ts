import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrdersProducts1625443182496 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "orders_products",
        columns: [
          {
            name: "order_id",
            type: "int"
          },
          {
            name: "product_id",
            type: "int"
          }
        ],
        foreignKeys: [
          {
            name: "fk_order_id",
            columnNames: ["order_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "orders",
            onDelete: "CASCADE"
          },
          {
            name: "fk_product_id",
            columnNames: ["product_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "products",
            onDelete: "CASCADE"
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("orders_products")
  }

}
