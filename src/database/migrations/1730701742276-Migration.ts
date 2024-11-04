import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1730701742276 implements MigrationInterface {
    name = 'Migration1730701742276'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "diary_condition" ("id" SERIAL NOT NULL, "label" text NOT NULL, "value" text NOT NULL, "img" text NOT NULL, "priority" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9af344ab3e41341a5baaefa32bb" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "diary_condition"`);
    }

}
