import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1732604284199 implements MigrationInterface {
    name = 'Migration1732604284199'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "meetings" ADD "name" text NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "meetings" DROP COLUMN "name"`);
    }

}
