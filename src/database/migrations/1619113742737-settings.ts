import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class settings1619113742737 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "settings",
                columns: [
                    {
                        name: "id",
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: "username",
                        type: "varchar",
                    },
                    {
                        name: "chat",
                        type: "boolean",
                    },
                    {
                      name: 'created_at',
                      type: 'timestamp',
                      default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            }), true)}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('settings')
    }

}
