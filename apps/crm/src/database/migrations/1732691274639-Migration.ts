import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1732691274639 implements MigrationInterface {
    name = 'Migration1732691274639'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teams" DROP CONSTRAINT "FK_10ccce4d7d878c221ee7c5c8057"`);
        await queryRunner.query(`ALTER TABLE "teams" RENAME COLUMN "team_id" TO "game_id"`);
        await queryRunner.query(`ALTER TABLE "teams" ADD CONSTRAINT "FK_596b51bc2c8663e8bc5f919db5b" FOREIGN KEY ("game_id") REFERENCES "games"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teams" DROP CONSTRAINT "FK_596b51bc2c8663e8bc5f919db5b"`);
        await queryRunner.query(`ALTER TABLE "teams" RENAME COLUMN "game_id" TO "team_id"`);
        await queryRunner.query(`ALTER TABLE "teams" ADD CONSTRAINT "FK_10ccce4d7d878c221ee7c5c8057" FOREIGN KEY ("team_id") REFERENCES "games"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
