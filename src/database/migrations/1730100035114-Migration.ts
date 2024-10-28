import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1730100035114 implements MigrationInterface {
    name = 'Migration1730100035114'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."banner_category_enum" AS ENUM('court', 'link')`);
        await queryRunner.query(`CREATE TABLE "banner" ("id" SERIAL NOT NULL, "title" text NOT NULL, "content" text NOT NULL, "thumbnail" text NOT NULL, "order" integer NOT NULL, "link" text NOT NULL, "courtId" text NOT NULL, "category" "public"."banner_category_enum" NOT NULL DEFAULT 'court', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_6d9e2570b3d85ba37b681cd4256" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "banner"`);
        await queryRunner.query(`DROP TYPE "public"."banner_category_enum"`);
    }

}
