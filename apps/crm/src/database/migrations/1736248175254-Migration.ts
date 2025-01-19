import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1736248175254 implements MigrationInterface {
    name = 'Migration1736248175254'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clubs" ADD "regular_play_time" text NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "clubs" ADD "region" text NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clubs" DROP COLUMN "region"`);
        await queryRunner.query(`ALTER TABLE "clubs" DROP COLUMN "regular_play_time"`);
    }

}
