import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1734354500310 implements MigrationInterface {
    name = 'Migration1734354500310'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "players" DROP CONSTRAINT "FK_ce457a554d63e92f4627d6c5763"`);
        await queryRunner.query(`ALTER TABLE "teams" DROP CONSTRAINT "FK_596b51bc2c8663e8bc5f919db5b"`);
        await queryRunner.query(`ALTER TABLE "players" ADD CONSTRAINT "FK_ce457a554d63e92f4627d6c5763" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "teams" ADD CONSTRAINT "FK_596b51bc2c8663e8bc5f919db5b" FOREIGN KEY ("game_id") REFERENCES "games"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teams" DROP CONSTRAINT "FK_596b51bc2c8663e8bc5f919db5b"`);
        await queryRunner.query(`ALTER TABLE "players" DROP CONSTRAINT "FK_ce457a554d63e92f4627d6c5763"`);
        await queryRunner.query(`ALTER TABLE "teams" ADD CONSTRAINT "FK_596b51bc2c8663e8bc5f919db5b" FOREIGN KEY ("game_id") REFERENCES "games"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "players" ADD CONSTRAINT "FK_ce457a554d63e92f4627d6c5763" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
