import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1731978625100 implements MigrationInterface {
    name = 'Migration1731978625100'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "lesson_core_option" ("id" SERIAL NOT NULL, "label" text NOT NULL, "value" text NOT NULL, "thumbnail" text NOT NULL DEFAULT '', "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "lessonId" integer, CONSTRAINT "PK_b13ba8b75742c7b5ed40e0c2b8a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "lesson_time_option" ADD "lessonId" integer`);
        await queryRunner.query(`ALTER TABLE "lesson_core_option" ADD CONSTRAINT "FK_958e218cb09a7136dd7b9e6b1b4" FOREIGN KEY ("lessonId") REFERENCES "lesson"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lesson_time_option" ADD CONSTRAINT "FK_093f0e2ee8970b4d819c580816d" FOREIGN KEY ("lessonId") REFERENCES "lesson"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lesson_time_option" DROP CONSTRAINT "FK_093f0e2ee8970b4d819c580816d"`);
        await queryRunner.query(`ALTER TABLE "lesson_core_option" DROP CONSTRAINT "FK_958e218cb09a7136dd7b9e6b1b4"`);
        await queryRunner.query(`ALTER TABLE "lesson_time_option" DROP COLUMN "lessonId"`);
        await queryRunner.query(`DROP TABLE "lesson_core_option"`);
    }

}
