import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1729843581341 implements MigrationInterface {
    name = 'Migration1729843581341'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "court" DROP CONSTRAINT "FK_30eb01c9d8e82af9f8567ceea47"`);
        await queryRunner.query(`ALTER TABLE "topic" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "topic" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "court" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "court" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "court" DROP COLUMN "topic_id"`);
        await queryRunner.query(`ALTER TABLE "topic" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "topic" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "court" ADD "topicId" integer`);
        await queryRunner.query(`ALTER TABLE "court" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "court" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "court" ADD CONSTRAINT "FK_03062d9906c2a9bfec3ab803dca" FOREIGN KEY ("topicId") REFERENCES "topic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "court" DROP CONSTRAINT "FK_03062d9906c2a9bfec3ab803dca"`);
        await queryRunner.query(`ALTER TABLE "court" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "court" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "court" DROP COLUMN "topicId"`);
        await queryRunner.query(`ALTER TABLE "topic" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "topic" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "court" ADD "topic_id" integer`);
        await queryRunner.query(`ALTER TABLE "court" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "court" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "topic" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "topic" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "court" ADD CONSTRAINT "FK_30eb01c9d8e82af9f8567ceea47" FOREIGN KEY ("topic_id") REFERENCES "topic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
