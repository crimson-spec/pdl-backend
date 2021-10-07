import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrderProducts1633568632673 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "order_products",
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
            columnNames: ["order_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "orders",
            onUpdate: "CASCADE",
            onDelete: "RESTRICT"
          },
          {
            columnNames: ["product_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "products",
            onUpdate: "CASCADE",
            onDelete: "RESTRICT"
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("order_products");
  }

}
