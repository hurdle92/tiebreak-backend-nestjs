import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1735232961069 implements MigrationInterface {
    name = 'Migration1735232961069'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "ntrp" SET DEFAULT '0.0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "ntrp" SET DEFAULT ''`);
    }

}
