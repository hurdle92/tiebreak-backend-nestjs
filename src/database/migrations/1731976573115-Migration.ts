import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1731976573115 implements MigrationInterface {
    name = 'Migration1731976573115'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "lesson_time_option" ("id" SERIAL NOT NULL, "label" text NOT NULL, "value" text NOT NULL, "thumbnail" text NOT NULL DEFAULT '', "order" integer NOT NULL DEFAULT '0', "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), CONSTRAINT "PK_58f5d4ad5233d3dc8185a55495d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "lesson_time_option"`);
    }

}
