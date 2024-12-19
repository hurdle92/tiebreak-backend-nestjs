import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1734619972201 implements MigrationInterface {
    name = 'Migration1734619972201'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "players" ADD "guest_name" text NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "players" DROP COLUMN "guest_name"`);
    }

}
