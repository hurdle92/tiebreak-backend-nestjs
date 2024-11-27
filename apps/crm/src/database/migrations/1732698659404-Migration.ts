import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1732698659404 implements MigrationInterface {
    name = 'Migration1732698659404'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "game_court_options" ("id" BIGSERIAL NOT NULL, "court_option_value" text NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), CONSTRAINT "PK_f25bec780e449f4e608eb088a40" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "game_court_options"`);
    }

}
