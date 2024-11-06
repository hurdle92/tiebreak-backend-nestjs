import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1730873464533 implements MigrationInterface {
    name = 'Migration1730873464533'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "banners" ALTER COLUMN "courtId" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "banners" ALTER COLUMN "courtId" SET NOT NULL`);
    }

}
