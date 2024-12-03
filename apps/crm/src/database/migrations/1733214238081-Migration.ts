import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1733214238081 implements MigrationInterface {
    name = 'Migration1733214238081'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "games" ADD "meeintg_game_court_option_id" bigint`);
        await queryRunner.query(`ALTER TABLE "games" ADD CONSTRAINT "FK_3b939870c2496c12e7157750c12" FOREIGN KEY ("meeintg_game_court_option_id") REFERENCES "meeintg_game_court_options"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "games" DROP CONSTRAINT "FK_3b939870c2496c12e7157750c12"`);
        await queryRunner.query(`ALTER TABLE "games" DROP COLUMN "meeintg_game_court_option_id"`);
    }

}
