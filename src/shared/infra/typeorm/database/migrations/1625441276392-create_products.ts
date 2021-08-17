import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createProducts1625441276392 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "products",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment"
          },
          {
            name: "category_id",
            type: "int"
          },
          {
            name: "name",
            type: "varchar",
            length: "60",
            isUnique: true
          },
          {
            name: "value",
            type: "decimal(8,2)"
          },
          {
            name: "status",
            type: "boolean",
            default: true
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
            name: "fk_category_id",
            columnNames: ["category_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "categories",
            onDelete: "CASCADE"
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("products")
  }

}
