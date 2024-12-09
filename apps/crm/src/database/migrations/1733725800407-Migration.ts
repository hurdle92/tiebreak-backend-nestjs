import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1733725800407 implements MigrationInterface {
    name = 'Migration1733725800407'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "players" ADD "is_guest" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "players" DROP COLUMN "is_guest"`);
    }

}
