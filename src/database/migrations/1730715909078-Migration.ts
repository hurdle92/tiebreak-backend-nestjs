import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1730715909078 implements MigrationInterface {
    name = 'Migration1730715909078'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."diary_option_type_enum" AS ENUM('match', 'hours', 'count')`);
        await queryRunner.query(`ALTER TABLE "diary_option" ADD "type" "public"."diary_option_type_enum" NOT NULL DEFAULT 'match'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "diary_option" DROP COLUMN "type"`);
        await queryRunner.query(`DROP TYPE "public"."diary_option_type_enum"`);
    }

}
