import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1730769092986 implements MigrationInterface {
    name = 'Migration1730769092986'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "diary" ADD "courtId" integer`);
        await queryRunner.query(`ALTER TABLE "diary" ADD CONSTRAINT "UQ_e4fc6f9d4237a82661d0dfbf3f2" UNIQUE ("courtId")`);
        await queryRunner.query(`ALTER TABLE "diary" ADD CONSTRAINT "FK_e4fc6f9d4237a82661d0dfbf3f2" FOREIGN KEY ("courtId") REFERENCES "court"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "diary" DROP CONSTRAINT "FK_e4fc6f9d4237a82661d0dfbf3f2"`);
        await queryRunner.query(`ALTER TABLE "diary" DROP CONSTRAINT "UQ_e4fc6f9d4237a82661d0dfbf3f2"`);
        await queryRunner.query(`ALTER TABLE "diary" DROP COLUMN "courtId"`);
    }

}
