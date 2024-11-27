import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1732674395461 implements MigrationInterface {
    name = 'Migration1732674395461'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "games" ("id" BIGSERIAL NOT NULL, "note" text NOT NULL DEFAULT '', "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "match_id" bigint, CONSTRAINT "PK_c9b16b62917b5595af982d66337" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "matches" ADD "note" text NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "games" ADD CONSTRAINT "FK_464671aa0a76da23441cbf33958" FOREIGN KEY ("match_id") REFERENCES "matches"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "games" DROP CONSTRAINT "FK_464671aa0a76da23441cbf33958"`);
        await queryRunner.query(`ALTER TABLE "matches" DROP COLUMN "note"`);
        await queryRunner.query(`DROP TABLE "games"`);
    }

}
