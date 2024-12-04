import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1733274168702 implements MigrationInterface {
    name = 'Migration1733274168702'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "game_results" ADD "is_draw" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "game_results" ADD "win_team_id" bigint`);
        await queryRunner.query(`ALTER TABLE "game_results" ADD "lose_team_id" bigint`);
        await queryRunner.query(`ALTER TABLE "game_results" ADD CONSTRAINT "FK_614478033ac1b4c218ab88d9781" FOREIGN KEY ("win_team_id") REFERENCES "teams"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "game_results" ADD CONSTRAINT "FK_b074de79d214d1a530f69a94d3d" FOREIGN KEY ("lose_team_id") REFERENCES "teams"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "game_results" DROP CONSTRAINT "FK_b074de79d214d1a530f69a94d3d"`);
        await queryRunner.query(`ALTER TABLE "game_results" DROP CONSTRAINT "FK_614478033ac1b4c218ab88d9781"`);
        await queryRunner.query(`ALTER TABLE "game_results" DROP COLUMN "lose_team_id"`);
        await queryRunner.query(`ALTER TABLE "game_results" DROP COLUMN "win_team_id"`);
        await queryRunner.query(`ALTER TABLE "game_results" DROP COLUMN "is_draw"`);
    }

}
