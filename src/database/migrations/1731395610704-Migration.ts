import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1731395610704 implements MigrationInterface {
    name = 'Migration1731395610704'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "diary_category" ADD "order" integer NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "diary_category" DROP COLUMN "order"`);
    }

}
