import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1732690640673 implements MigrationInterface {
    name = 'Migration1732690640673'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teams" ADD "team_id" bigint`);
        await queryRunner.query(`ALTER TABLE "teams" ADD CONSTRAINT "FK_10ccce4d7d878c221ee7c5c8057" FOREIGN KEY ("team_id") REFERENCES "games"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teams" DROP CONSTRAINT "FK_10ccce4d7d878c221ee7c5c8057"`);
        await queryRunner.query(`ALTER TABLE "teams" DROP COLUMN "team_id"`);
    }

}
