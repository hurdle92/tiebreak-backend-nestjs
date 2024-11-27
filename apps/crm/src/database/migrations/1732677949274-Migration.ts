import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1732677949274 implements MigrationInterface {
    name = 'Migration1732677949274'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."games_game_type_enum" AS ENUM('single', 'double')`);
        await queryRunner.query(`ALTER TABLE "games" ADD "game_type" "public"."games_game_type_enum" NOT NULL DEFAULT 'double'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "games" DROP COLUMN "game_type"`);
        await queryRunner.query(`DROP TYPE "public"."games_game_type_enum"`);
    }

}
