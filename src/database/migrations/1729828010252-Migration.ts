import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1729828010252 implements MigrationInterface {
    name = 'Migration1729828010252'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "topic" ("id" SERIAL NOT NULL, "title" text NOT NULL, "order" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_33aa4ecb4e4f20aa0157ea7ef61" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "court" ADD "topic_id" integer`);
        await queryRunner.query(`ALTER TABLE "court" ADD CONSTRAINT "FK_30eb01c9d8e82af9f8567ceea47" FOREIGN KEY ("topic_id") REFERENCES "topic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "court" DROP CONSTRAINT "FK_30eb01c9d8e82af9f8567ceea47"`);
        await queryRunner.query(`ALTER TABLE "court" DROP COLUMN "topic_id"`);
        await queryRunner.query(`DROP TABLE "topic"`);
    }

}
