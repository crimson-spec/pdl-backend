import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createOrderPads1633568517108 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'order_pad',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            length: '36',
            isPrimary: true,
          },
          {
            name: 'table_id',
            type: 'varchar',
          },
          {
            name: 'is_open',
            type: 'boolean',
            default: true,
          },
          {
            name: 'contact',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'ipv4',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'write_off_at',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['table_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'tables',
            onUpdate: 'CASCADE',
            onDelete: 'RESTRICT',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('order_pad');
  }
}
