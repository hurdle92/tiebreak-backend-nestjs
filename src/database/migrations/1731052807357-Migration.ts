import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1731052807357 implements MigrationInterface {
    name = 'Migration1731052807357'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "diaryOptions" DROP COLUMN "type"`);
        await queryRunner.query(`CREATE TYPE "public"."diaryOptions_type_enum" AS ENUM('match', 'hours', 'counts')`);
        await queryRunner.query(`ALTER TABLE "diaryOptions" ADD "type" "public"."diaryOptions_type_enum" NOT NULL DEFAULT 'match'`);
        await queryRunner.query(`ALTER TABLE "diaryOptions" DROP COLUMN "priority"`);
        await queryRunner.query(`ALTER TABLE "diaryOptions" ADD "priority" integer DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "diaryOptions" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "diaryOptions" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "diaryOptions" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "diaryOptions" ADD "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "diaryOptions" DROP COLUMN "priority"`);
        await queryRunner.query(`ALTER TABLE "diaryOptions" ADD "priority" smallint DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "diaryOptions" DROP COLUMN "type"`);
        await queryRunner.query(`DROP TYPE "public"."diaryOptions_type_enum"`);
        await queryRunner.query(`ALTER TABLE "diaryOptions" ADD "type" text NOT NULL DEFAULT ''`);
    }

}
