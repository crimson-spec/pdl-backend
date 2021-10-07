import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createCategories1633568407318 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "categories",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment"
          },
          {
            name: "sector_id",
            type: "int"
          },
          {
            name: "name",
            type: "varchar",
            length: "60",
            isUnique: true
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
          },
        ],
        foreignKeys: [
          {
            name: "fk_sector_id",
            columnNames: ["sector_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "sectors",
            onUpdate: "CASCADE",
            onDelete: "RESTRICT"
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("categories");
  }

}
