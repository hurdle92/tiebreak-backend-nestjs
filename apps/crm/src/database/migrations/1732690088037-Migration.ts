import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1732690088037 implements MigrationInterface {
    name = 'Migration1732690088037'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "teams" ("id" BIGSERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "playersId" bigint, CONSTRAINT "PK_7e5523774a38b08a6236d322403" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "players" ADD "team_id" bigint`);
        await queryRunner.query(`ALTER TABLE "teams" ADD CONSTRAINT "FK_052360569e5dffeebcb6abe881d" FOREIGN KEY ("playersId") REFERENCES "players"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "players" ADD CONSTRAINT "FK_ce457a554d63e92f4627d6c5763" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "players" DROP CONSTRAINT "FK_ce457a554d63e92f4627d6c5763"`);
        await queryRunner.query(`ALTER TABLE "teams" DROP CONSTRAINT "FK_052360569e5dffeebcb6abe881d"`);
        await queryRunner.query(`ALTER TABLE "players" DROP COLUMN "team_id"`);
        await queryRunner.query(`DROP TABLE "teams"`);
    }

}
