import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1730426044049 implements MigrationInterface {
    name = 'Migration1730426044049'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "kakaoId" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "appleEmail" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "appleEmail"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "kakaoId"`);
    }

}
