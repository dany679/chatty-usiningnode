
import {MigrationInterface, QueryRunner, Table} from "typeorm";


export class Messages1619238554234 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name:"messages",
              columns:[
            {
                name: "id",
                type: 'varchar',
                generationStrategy: 'uuid',
                isPrimary:true
            },{
                name: "user_id",
                type: 'varchar',
                generationStrategy: 'uuid',
                isNullable:true
            },{
                name: "admin_id",
                type: 'varchar',
                generationStrategy: 'uuid',
                isNullable:true
            },{
                name: "text",
                type: 'varchar'
            }, {
                name: 'created_at',
                type: 'timestamp',
                default: 'now()'
              },
            ],
            foreignKeys:[
                {
                    name:"FKUsers",
                    referencedTableName: "users",
                    referencedColumnNames: ["id"],
                    columnNames: ["user_id"],
                    onDelete: "SET NULL",
                    onUpdate:"SET NULL"
                },
                 ],
           
            }),)
           
            
        }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('messages')
    }

}
