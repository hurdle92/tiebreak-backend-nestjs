import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1732265620373 implements MigrationInterface {
    name = 'Migration1732265620373'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "user_id" text NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" text NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "users" ADD "ntrp" text NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "users" ADD "email" text NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "ntrp"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "user_id"`);
    }

}
