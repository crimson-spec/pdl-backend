import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrderPad1625442802175 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "order_pad",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment"
          },
          {
            name: "table_id",
            type: "int",
          },
          {
            name: "hash_code",
            type: "varchar",
            length: "120"
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()"
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()"
          }
        ],
        foreignKeys: [
          {
            name: "fk_table_id",
            columnNames: ["table_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "tables",
            onDelete: "CASCADE"
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("order_pad")
  }

}
