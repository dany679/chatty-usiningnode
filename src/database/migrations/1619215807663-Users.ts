import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Users1619215807663 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
        new Table({
            
                name:"users" ,
                columns:[
                    {
                        name: "id",
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid'
                    },{
                        name:"email",
                        type:"varchar"
                    },{
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                      }
                ]    
            
        })
        ,true)    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}
