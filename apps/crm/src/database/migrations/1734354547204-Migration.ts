import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1734354547204 implements MigrationInterface {
    name = 'Migration1734354547204'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "player-user-bridges" DROP CONSTRAINT "FK_009a4d95404ff9d8ecbed5bdeda"`);
        await queryRunner.query(`ALTER TABLE "player-user-bridges" DROP CONSTRAINT "FK_f3b239d5513930a82a3b046ed43"`);
        await queryRunner.query(`ALTER TABLE "player-user-bridges" ADD CONSTRAINT "FK_f3b239d5513930a82a3b046ed43" FOREIGN KEY ("player_id") REFERENCES "players"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "player-user-bridges" ADD CONSTRAINT "FK_009a4d95404ff9d8ecbed5bdeda" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "player-user-bridges" DROP CONSTRAINT "FK_009a4d95404ff9d8ecbed5bdeda"`);
        await queryRunner.query(`ALTER TABLE "player-user-bridges" DROP CONSTRAINT "FK_f3b239d5513930a82a3b046ed43"`);
        await queryRunner.query(`ALTER TABLE "player-user-bridges" ADD CONSTRAINT "FK_f3b239d5513930a82a3b046ed43" FOREIGN KEY ("player_id") REFERENCES "players"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "player-user-bridges" ADD CONSTRAINT "FK_009a4d95404ff9d8ecbed5bdeda" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
