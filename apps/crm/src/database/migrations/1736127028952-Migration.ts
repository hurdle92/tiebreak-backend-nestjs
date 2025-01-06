import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1736127028952 implements MigrationInterface {
    name = 'Migration1736127028952'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clubs" ADD "court_id" bigint`);
        await queryRunner.query(`ALTER TABLE "clubs" ADD CONSTRAINT "FK_cb4ef5b2da598379a0c384b3e9f" FOREIGN KEY ("court_id") REFERENCES "courts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clubs" DROP CONSTRAINT "FK_cb4ef5b2da598379a0c384b3e9f"`);
        await queryRunner.query(`ALTER TABLE "clubs" DROP COLUMN "court_id"`);
    }

}
