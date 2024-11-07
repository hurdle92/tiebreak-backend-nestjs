import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1730969150404 implements MigrationInterface {
    name = 'Migration1730969150404'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "updateConfig" ALTER COLUMN "needUpdateVersion" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "updateConfig" ALTER COLUMN "expireTimeHours" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "updateConfig" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "updateConfig" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "updateConfig" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "updateConfig" ADD "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "updateConfig" ALTER COLUMN "expireTimeHours" SET DEFAULT '24'`);
        await queryRunner.query(`ALTER TABLE "updateConfig" ALTER COLUMN "needUpdateVersion" SET DEFAULT '1.1.33'`);
    }

}
