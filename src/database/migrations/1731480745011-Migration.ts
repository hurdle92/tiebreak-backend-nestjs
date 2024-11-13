import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1731480745011 implements MigrationInterface {
    name = 'Migration1731480745011'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lesson" ADD "userId" bigint`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD CONSTRAINT "UQ_a02f19dde5db17193d44681d8ad" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD CONSTRAINT "FK_a02f19dde5db17193d44681d8ad" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lesson" DROP CONSTRAINT "FK_a02f19dde5db17193d44681d8ad"`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP CONSTRAINT "UQ_a02f19dde5db17193d44681d8ad"`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "userId"`);
    }

}
