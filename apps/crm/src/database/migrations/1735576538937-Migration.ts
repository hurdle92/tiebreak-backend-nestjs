import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1735576538937 implements MigrationInterface {
    name = 'Migration1735576538937'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "games" DROP CONSTRAINT "FK_2d653fa3d5b19e4b444e8f85c7f"`);
        await queryRunner.query(`ALTER TABLE "games" DROP CONSTRAINT "UQ_2d653fa3d5b19e4b444e8f85c7f"`);
        await queryRunner.query(`ALTER TABLE "games" DROP COLUMN "game_result_id"`);
        await queryRunner.query(`ALTER TABLE "game_results" DROP CONSTRAINT "FK_f032def59471c31cd870d1fe1e9"`);
        await queryRunner.query(`ALTER TABLE "game_results" DROP CONSTRAINT "REL_f032def59471c31cd870d1fe1e"`);
        await queryRunner.query(`ALTER TABLE "game_results" ADD CONSTRAINT "FK_f032def59471c31cd870d1fe1e9" FOREIGN KEY ("game_id") REFERENCES "games"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "game_results" DROP CONSTRAINT "FK_f032def59471c31cd870d1fe1e9"`);
        await queryRunner.query(`ALTER TABLE "game_results" ADD CONSTRAINT "REL_f032def59471c31cd870d1fe1e" UNIQUE ("game_id")`);
        await queryRunner.query(`ALTER TABLE "game_results" ADD CONSTRAINT "FK_f032def59471c31cd870d1fe1e9" FOREIGN KEY ("game_id") REFERENCES "games"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "games" ADD "game_result_id" bigint`);
        await queryRunner.query(`ALTER TABLE "games" ADD CONSTRAINT "UQ_2d653fa3d5b19e4b444e8f85c7f" UNIQUE ("game_result_id")`);
        await queryRunner.query(`ALTER TABLE "games" ADD CONSTRAINT "FK_2d653fa3d5b19e4b444e8f85c7f" FOREIGN KEY ("game_result_id") REFERENCES "game_results"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
