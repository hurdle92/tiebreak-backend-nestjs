import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1732102535739 implements MigrationInterface {
    name = 'Migration1732102535739'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lesson_core_option" ADD "order" integer NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lesson_core_option" DROP COLUMN "order"`);
    }

}
