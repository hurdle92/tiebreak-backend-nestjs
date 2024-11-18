import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1731898984346 implements MigrationInterface {
    name = 'Migration1731898984346'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lesson" DROP CONSTRAINT "FK_20796a9411b6339c14c61adcb01"`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP CONSTRAINT "FK_a02f19dde5db17193d44681d8ad"`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP CONSTRAINT "UQ_20796a9411b6339c14c61adcb01"`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "courtId"`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP CONSTRAINT "UQ_a02f19dde5db17193d44681d8ad"`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD "user" bigint`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD "court" bigint`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD CONSTRAINT "FK_7a597d82edb297a93228934a8dd" FOREIGN KEY ("user") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD CONSTRAINT "FK_9cfe72077ab237d3d5c87aa6a69" FOREIGN KEY ("court") REFERENCES "courts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lesson" DROP CONSTRAINT "FK_9cfe72077ab237d3d5c87aa6a69"`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP CONSTRAINT "FK_7a597d82edb297a93228934a8dd"`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "court"`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "user"`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD "userId" bigint`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD CONSTRAINT "UQ_a02f19dde5db17193d44681d8ad" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD "courtId" bigint`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD CONSTRAINT "UQ_20796a9411b6339c14c61adcb01" UNIQUE ("courtId")`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD CONSTRAINT "FK_a02f19dde5db17193d44681d8ad" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD CONSTRAINT "FK_20796a9411b6339c14c61adcb01" FOREIGN KEY ("courtId") REFERENCES "courts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
