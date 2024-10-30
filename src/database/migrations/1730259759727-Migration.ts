import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1730259759727 implements MigrationInterface {
    name = 'Migration1730259759727'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "region" ("id" SERIAL NOT NULL, "name" text NOT NULL, "thumbnail" text NOT NULL, "order" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_5f48ffc3af96bc486f5f3f3a6da" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "region"`);
    }

}
