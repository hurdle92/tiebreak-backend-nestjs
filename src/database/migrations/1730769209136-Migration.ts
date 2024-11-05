import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1730769209136 implements MigrationInterface {
    name = 'Migration1730769209136'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "diary" ADD "diaryConditionId" integer`);
        await queryRunner.query(`ALTER TABLE "diary" ADD CONSTRAINT "UQ_34e15133a875fb020e825796901" UNIQUE ("diaryConditionId")`);
        await queryRunner.query(`ALTER TABLE "diary" ADD CONSTRAINT "FK_34e15133a875fb020e825796901" FOREIGN KEY ("diaryConditionId") REFERENCES "diary_condition"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "diary" DROP CONSTRAINT "FK_34e15133a875fb020e825796901"`);
        await queryRunner.query(`ALTER TABLE "diary" DROP CONSTRAINT "UQ_34e15133a875fb020e825796901"`);
        await queryRunner.query(`ALTER TABLE "diary" DROP COLUMN "diaryConditionId"`);
    }

}
