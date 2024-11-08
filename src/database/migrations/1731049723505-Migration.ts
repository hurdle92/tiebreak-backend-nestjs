import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1731049723505 implements MigrationInterface {
    name = 'Migration1731049723505'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "regions" ("id" BIGSERIAL NOT NULL, "name" text NOT NULL, "thumbnail" text NOT NULL, "order" integer NOT NULL DEFAULT '0', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_4fcd12ed6a046276e2deb08801c" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "regions"`);
    }

}
