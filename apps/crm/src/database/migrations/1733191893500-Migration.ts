import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1733191893500 implements MigrationInterface {
    name = 'Migration1733191893500'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TYPE "public"."games_game_type_enum" RENAME TO "games_game_type_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."games_game_type_enum" AS ENUM('SINGLE', 'DOUBLE', 'MENS_DOUBLE', 'WOMENS_DOUBLE', 'MIXED_DOUBLE')`);
        await queryRunner.query(`ALTER TABLE "games" ALTER COLUMN "game_type" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "games" ALTER COLUMN "game_type" TYPE "public"."games_game_type_enum" USING "game_type"::"text"::"public"."games_game_type_enum"`);
        await queryRunner.query(`ALTER TABLE "games" ALTER COLUMN "game_type" SET DEFAULT 'DOUBLE'`);
        await queryRunner.query(`DROP TYPE "public"."games_game_type_enum_old"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."games_game_type_enum_old" AS ENUM('single', 'double', 'mens_double', 'womens_double', 'mixed_double')`);
        await queryRunner.query(`ALTER TABLE "games" ALTER COLUMN "game_type" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "games" ALTER COLUMN "game_type" TYPE "public"."games_game_type_enum_old" USING "game_type"::"text"::"public"."games_game_type_enum_old"`);
        await queryRunner.query(`ALTER TABLE "games" ALTER COLUMN "game_type" SET DEFAULT 'double'`);
        await queryRunner.query(`DROP TYPE "public"."games_game_type_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."games_game_type_enum_old" RENAME TO "games_game_type_enum"`);
    }

}
