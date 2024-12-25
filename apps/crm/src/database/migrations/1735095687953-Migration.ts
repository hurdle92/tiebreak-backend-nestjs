import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1735095687953 implements MigrationInterface {
    name = 'Migration1735095687953'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "assignment_regions" ("id" BIGSERIAL NOT NULL, "label" text NOT NULL DEFAULT '', "value" text NOT NULL DEFAULT '', "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), CONSTRAINT "PK_a6132d016d3ba573bd28e31f484" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "assignment_regions"`);
    }

}
