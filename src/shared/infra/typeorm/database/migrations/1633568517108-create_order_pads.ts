import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrderPads1633568517108 implements MigrationInterface {

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
            isNullable: true
          },
          {
            name: "hash_code",
            type: "varchar",
            length: "120"
          },
          {
            name: "in_use",
            type: "boolean",
            default: false
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
            columnNames: ["table_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "tables",
            onUpdate: "CASCADE",
            onDelete: "RESTRICT"
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("order_pad");
  }

}
