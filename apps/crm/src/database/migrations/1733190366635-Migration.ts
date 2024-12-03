import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1733190366635 implements MigrationInterface {
    name = 'Migration1733190366635'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "meeintg_game_court_options" ("id" BIGSERIAL NOT NULL, "court_option_value" text NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "meeting_id" bigint, CONSTRAINT "PK_a3183d581ab506ff4d398001c8d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TYPE "public"."games_game_type_enum" RENAME TO "games_game_type_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."games_game_type_enum" AS ENUM('single', 'double', 'mens_double', 'womens_double', 'mixed_double')`);
        await queryRunner.query(`ALTER TABLE "games" ALTER COLUMN "game_type" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "games" ALTER COLUMN "game_type" TYPE "public"."games_game_type_enum" USING "game_type"::"text"::"public"."games_game_type_enum"`);
        await queryRunner.query(`ALTER TABLE "games" ALTER COLUMN "game_type" SET DEFAULT 'double'`);
        await queryRunner.query(`DROP TYPE "public"."games_game_type_enum_old"`);
        await queryRunner.query(`ALTER TABLE "meeintg_game_court_options" ADD CONSTRAINT "FK_6c5dd2b0a3aba002c920c6ab3a9" FOREIGN KEY ("meeting_id") REFERENCES "meetings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "meeintg_game_court_options" DROP CONSTRAINT "FK_6c5dd2b0a3aba002c920c6ab3a9"`);
        await queryRunner.query(`CREATE TYPE "public"."games_game_type_enum_old" AS ENUM('single', 'double')`);
        await queryRunner.query(`ALTER TABLE "games" ALTER COLUMN "game_type" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "games" ALTER COLUMN "game_type" TYPE "public"."games_game_type_enum_old" USING "game_type"::"text"::"public"."games_game_type_enum_old"`);
        await queryRunner.query(`ALTER TABLE "games" ALTER COLUMN "game_type" SET DEFAULT 'double'`);
        await queryRunner.query(`DROP TYPE "public"."games_game_type_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."games_game_type_enum_old" RENAME TO "games_game_type_enum"`);
        await queryRunner.query(`DROP TABLE "meeintg_game_court_options"`);
    }

}
