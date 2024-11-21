import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1732150952108 implements MigrationInterface {
    name = 'Migration1732150952108'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lesson" ADD "lesson_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "lesson_date"`);
    }

}
