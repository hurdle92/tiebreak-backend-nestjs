import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1730768119435 implements MigrationInterface {
    name = 'Migration1730768119435'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TYPE "public"."diary_option_type_enum" RENAME TO "diary_option_type_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."diary_option_type_enum" AS ENUM('match', 'hours', 'counts')`);
        await queryRunner.query(`ALTER TABLE "diary_option" ALTER COLUMN "type" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "diary_option" ALTER COLUMN "type" TYPE "public"."diary_option_type_enum" USING "type"::"text"::"public"."diary_option_type_enum"`);
        await queryRunner.query(`ALTER TABLE "diary_option" ALTER COLUMN "type" SET DEFAULT 'match'`);
        await queryRunner.query(`DROP TYPE "public"."diary_option_type_enum_old"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."diary_option_type_enum_old" AS ENUM('match', 'hours', 'count')`);
        await queryRunner.query(`ALTER TABLE "diary_option" ALTER COLUMN "type" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "diary_option" ALTER COLUMN "type" TYPE "public"."diary_option_type_enum_old" USING "type"::"text"::"public"."diary_option_type_enum_old"`);
        await queryRunner.query(`ALTER TABLE "diary_option" ALTER COLUMN "type" SET DEFAULT 'match'`);
        await queryRunner.query(`DROP TYPE "public"."diary_option_type_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."diary_option_type_enum_old" RENAME TO "diary_option_type_enum"`);
    }

}
