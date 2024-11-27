import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1732698934869 implements MigrationInterface {
    name = 'Migration1732698934869'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "game_court_options" ADD "meeting_id" bigint`);
        await queryRunner.query(`ALTER TABLE "game_court_options" ADD CONSTRAINT "FK_b37e3a90cd05e2c4877c1ee54e5" FOREIGN KEY ("meeting_id") REFERENCES "meetings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "game_court_options" DROP CONSTRAINT "FK_b37e3a90cd05e2c4877c1ee54e5"`);
        await queryRunner.query(`ALTER TABLE "game_court_options" DROP COLUMN "meeting_id"`);
    }

}
