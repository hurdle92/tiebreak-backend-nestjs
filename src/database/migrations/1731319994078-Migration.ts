import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1731319994078 implements MigrationInterface {
    name = 'Migration1731319994078'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "lesson" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0ef25918f0237e68696dee455bd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "diaryStatusOptions" ALTER COLUMN "priority" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "diaryStatusOptions" ALTER COLUMN "priority" SET DEFAULT '0'`);
        await queryRunner.query(`DROP TABLE "lesson"`);
    }

}
