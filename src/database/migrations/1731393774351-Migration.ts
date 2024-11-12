import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1731393774351 implements MigrationInterface {
    name = 'Migration1731393774351'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "diary_category" ("id" SERIAL NOT NULL, "title" text NOT NULL, "description" text NOT NULL, "thumbnail" text NOT NULL, "value" text NOT NULL, "path" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_fe60963c47b6db501844c69240c" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "diary_category"`);
    }

}
