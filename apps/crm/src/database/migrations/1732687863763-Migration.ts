import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1732687863763 implements MigrationInterface {
    name = 'Migration1732687863763'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "players" ("id" BIGSERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), CONSTRAINT "PK_de22b8fdeee0c33ab55ae71da3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "player-user-bridges" ("id" SERIAL NOT NULL, "player_id" bigint NOT NULL, "user_id" bigint NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), CONSTRAINT "PK_589f2a525958357918ffe059f8a" PRIMARY KEY ("id", "player_id", "user_id"))`);
        await queryRunner.query(`ALTER TABLE "player-user-bridges" ADD CONSTRAINT "FK_f3b239d5513930a82a3b046ed43" FOREIGN KEY ("player_id") REFERENCES "players"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "player-user-bridges" ADD CONSTRAINT "FK_009a4d95404ff9d8ecbed5bdeda" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "player-user-bridges" DROP CONSTRAINT "FK_009a4d95404ff9d8ecbed5bdeda"`);
        await queryRunner.query(`ALTER TABLE "player-user-bridges" DROP CONSTRAINT "FK_f3b239d5513930a82a3b046ed43"`);
        await queryRunner.query(`DROP TABLE "player-user-bridges"`);
        await queryRunner.query(`DROP TABLE "players"`);
    }

}
