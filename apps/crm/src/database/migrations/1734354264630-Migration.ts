import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1734354264630 implements MigrationInterface {
    name = 'Migration1734354264630'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "matches" ALTER COLUMN "note" SET DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "matches" ALTER COLUMN "note" SET DEFAULT ' '`);
    }

}
