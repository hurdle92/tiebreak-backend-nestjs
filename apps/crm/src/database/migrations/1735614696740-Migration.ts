import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1735614696740 implements MigrationInterface {
    name = 'Migration1735614696740'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clubs" ADD "description" text NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clubs" DROP COLUMN "description"`);
    }

}
