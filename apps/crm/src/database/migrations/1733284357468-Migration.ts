import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1733284357468 implements MigrationInterface {
    name = 'Migration1733284357468'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "match_results" DROP CONSTRAINT "FK_0b648c9f7c7e2189077c12fadbd"`);
        await queryRunner.query(`ALTER TABLE "match_results" DROP COLUMN "gameResultsId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "match_results" ADD "gameResultsId" bigint`);
        await queryRunner.query(`ALTER TABLE "match_results" ADD CONSTRAINT "FK_0b648c9f7c7e2189077c12fadbd" FOREIGN KEY ("gameResultsId") REFERENCES "game_results"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
