import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1731479442178 implements MigrationInterface {
    name = 'Migration1731479442178'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lesson" ADD "courtId" bigint`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD CONSTRAINT "UQ_20796a9411b6339c14c61adcb01" UNIQUE ("courtId")`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD CONSTRAINT "FK_20796a9411b6339c14c61adcb01" FOREIGN KEY ("courtId") REFERENCES "courts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lesson" DROP CONSTRAINT "FK_20796a9411b6339c14c61adcb01"`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP CONSTRAINT "UQ_20796a9411b6339c14c61adcb01"`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "courtId"`);
    }

}
