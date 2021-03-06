import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrders1633568591083 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "orders",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment"
          },
          {
            name: "order_pad_id",
            type: "int"
          },
          {
            name: "obs",
            type: "varchar",
            isNullable: true
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()"
          }
        ],
        foreignKeys: [
          {
            name: "fk_order_pad_id",
            columnNames: ["order_pad_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "order_pad",
            onUpdate: "CASCADE",
            onDelete: "RESTRICT"
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("orders");
  }


}
