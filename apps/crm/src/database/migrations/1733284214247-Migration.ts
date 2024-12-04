import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1733284214247 implements MigrationInterface {
    name = 'Migration1733284214247'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "match_results" ("id" BIGSERIAL NOT NULL, "note" text NOT NULL DEFAULT '', "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "match_id" bigint, "gameResultsId" bigint, CONSTRAINT "REL_e9d504d20c43a4b5cdb355e7f8" UNIQUE ("match_id"), CONSTRAINT "PK_788799fb3b8324d976620b485f2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "game_results" ADD "match_result_id" bigint`);
        await queryRunner.query(`ALTER TABLE "matches" ADD "match_result_id" bigint`);
        await queryRunner.query(`ALTER TABLE "matches" ADD CONSTRAINT "UQ_fa90719bf4ab313bb6fe4da9b90" UNIQUE ("match_result_id")`);
        await queryRunner.query(`ALTER TABLE "match_results" ADD CONSTRAINT "FK_e9d504d20c43a4b5cdb355e7f8e" FOREIGN KEY ("match_id") REFERENCES "matches"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "match_results" ADD CONSTRAINT "FK_0b648c9f7c7e2189077c12fadbd" FOREIGN KEY ("gameResultsId") REFERENCES "game_results"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "game_results" ADD CONSTRAINT "FK_1fae05e4a2adbf5b94042550cfc" FOREIGN KEY ("match_result_id") REFERENCES "match_results"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "matches" ADD CONSTRAINT "FK_fa90719bf4ab313bb6fe4da9b90" FOREIGN KEY ("match_result_id") REFERENCES "match_results"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "matches" DROP CONSTRAINT "FK_fa90719bf4ab313bb6fe4da9b90"`);
        await queryRunner.query(`ALTER TABLE "game_results" DROP CONSTRAINT "FK_1fae05e4a2adbf5b94042550cfc"`);
        await queryRunner.query(`ALTER TABLE "match_results" DROP CONSTRAINT "FK_0b648c9f7c7e2189077c12fadbd"`);
        await queryRunner.query(`ALTER TABLE "match_results" DROP CONSTRAINT "FK_e9d504d20c43a4b5cdb355e7f8e"`);
        await queryRunner.query(`ALTER TABLE "matches" DROP CONSTRAINT "UQ_fa90719bf4ab313bb6fe4da9b90"`);
        await queryRunner.query(`ALTER TABLE "matches" DROP COLUMN "match_result_id"`);
        await queryRunner.query(`ALTER TABLE "game_results" DROP COLUMN "match_result_id"`);
        await queryRunner.query(`DROP TABLE "match_results"`);
    }

}
